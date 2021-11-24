import { useFormik } from 'formik'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const CrudApi = () => {
    const [data, setData] = useState([]) 
    
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

  
   
    axios.defaults.baseURL = "http://localhost:3050"
   
    //getting data
    useEffect(() => {
     axios.get(`/heavenlybodies`)
     .then((result)=>setData(result.data))
    },[])


    //adding data
    const onAddData =async(e)=> {
        e.preventDefault()
        const request ={
            id: data.id,
            title:formus.values.title,
            properties:formus.values.properties
        }
        const response = await axios.post(`/heavenlybodies`,request)
        setData(data.concat(response.data))
        console.log(response.data)
        console.log(data)
    }
         
    //deleting data
     const deleteData = async(id)=>{
         await axios.delete(`/heavenlybodies/${id}`)
         const newData = data.filter((datas)=>{
            return datas.id !== id
         })
         setData(newData)
     }



     //editing data
     const [notess, setNotess] = useState({id:"",etitle:"", eproperties:""});
     const onChange =(e)=>{
         setNotess({...notess,[e.target.name]: e.target.value})
     }


     const openModal = (result) => {
         console.log(result)
         setOpen(true)
         setNotess({id:result.id,etitle:result.title, eproperties:result.properties})
         console.log(result.id,result.title,result.properties)
     };

     const EditData = async (id,title,properties)=>{
            // console.log(data)
            // console.log(newNotes)
            const indexx =(person)=>{
                return person.id === id
            }
            var index = data.findIndex(indexx)
            var request = {
               id:data[index].id=id,
               title:data[index].title=title,
               properties: data[index].properties=properties,}
            
      
         axios.put(`/heavenlybodies/${id}`,request)
            const removed = data.splice(index,1,request)
            console.log(removed)
            setData(data)
   
            
     }



     const editData =(e)=>{
         e.preventDefault()
        EditData(notess.id,notess.etitle,notess.eproperties)
     }



     //using formik 
     const initialValues = {
        title: '',
        properties: '',
    }
    const formus = useFormik({
        initialValues,
        onAddData
    })

  

    return (
        <>
        <div className="crudapi">
            <div className="addbodies">
                <form onSubmit={onAddData} >
                    <div className="text">
                        <input type="text" name="title" placeholder="Star Name" value={formus.values.title} onChange={formus.handleChange} />
                    </div>

                    <div className="text">
                        <input  type="text" name="properties" placeholder="It's Specialities" value={formus.values.properties} onChange={formus.handleChange} />
                    </div>

                    <div >
                         {/* <button className="addbutton" onClick={getData}>get</button> */}
                         <button className="addbutton" type="submit" >ADD</button>
                         {/* <button className="addbutton" onClick={handleAddApi}>ADD</button> */}
                    </div>
                </form>

                <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 500 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="headings">ID</TableCell>
                                    <TableCell className="headings" align="right">Title</TableCell>
                                    <TableCell className="headings" align="right" >Properties</TableCell> 
                                    <TableCell className="headings" align="right" >Action</TableCell> 
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.map((result)=>(
                                <TableRow key={result.id}>
                                    <TableCell >{result.id}</TableCell>
                                    <TableCell align="right">{result.title}</TableCell>
                                    <TableCell align="right">{result.properties}</TableCell>
                                     <TableCell  align="right"><DeleteIcon onClick={()=>deleteData(result.id)}/>
                                     <EditIcon onClick={()=>openModal(result)}/></TableCell>
                                </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                </TableContainer>
                      
            </div>
        </div>
                        <div>
                                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                        <Box sx={style}>
                                        <form onSubmit={(index)=>editData(index)} >
                                            <div className="text">
                                                <input type="text" name="etitle" placeholder="Edit Star Name" value={notess.etitle} onChange={onChange} />
                                            </div>

                                            <div className="text">
                                                <input  type="text" name="eproperties" placeholder="Edit It's Specialities" value={notess.eproperties} onChange={onChange} />
                                            </div>

                                            <div >
                                                {/* <button className="addbutton" onClick={getData}>get</button> */}
                                                <button className="addbutton" type="submit" >EDIT</button>
                                                {/* <button className="addbutton" onClick={handleAddApi}>ADD</button> */}
                                            </div>
                                        </form>
                                        </Box>
                                    </Modal>
                        </div>
        </>
           )
}
export default CrudApi

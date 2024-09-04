import React, { useState,useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const [contacts, setContacts] = useState([])
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail]= useState("")
	const [ address, setAddress] = useState("")
		useEffect(()=>{
		fetch('https://playground.4geeks.com/contact/agendas/MaxiRomero', {
			method: "GET",
			
			headers: {
			  "Content-Type": "application/json"
			}
		  })
		  .then(resp => {
			  return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
		  })
		  .then(data => {
			  // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
			  setContacts(data.contacts); // 
		  })
		  .catch(error => {
			  // Manejo de errores
			  console.log(error);
		  });
	},[])
	const deleteTodo = (id) => {
		fetch(`https://playground.4geeks.com/contact/agendas/MaxiRomero/contacts/${id}`, {
			method: "DELETE",
			
			headers: {
			  "Content-Type": "application/json"
			}
		  })
		  .then(resp => {
			  return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
		  })
		  .then(data => {
			  // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
			  setContacts(data.contacts); // 
		  })
		  .catch(error => {
			  // Manejo de errores
			  console.log(error);
		  });
	}
	return (
		<div className="text-center mt-5">
			<div>
				<input value={name} onChange = {(e)=>setName(e.target.value)}/>
				<input value={phone} onChange = {(e)=>setPhone(e.target.value)}/>
				<input value={email} onChange = {(e)=>setEmail(e.target.value)}/>
				<input value={address} onChange = {(e)=>setAddress(e.target.value)}/>
			</div>
		{contacts.map(contact=>(
			<div>
                <p>{contact.name}</p> 
				<p>{contact.phone}</p>
				<p>{contact.email}</p>
				<p>{contact.address}</p>
				<div>
					<button onClick={()=>deleteTodo(contact.id)}>ELIMINAR</button>
				</div>
			</div>
		))}
		</div>
	)
};

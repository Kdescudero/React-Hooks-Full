import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import './styles.css'
import axios from 'axios';

const Home = () => {
	const { appContext: { color, setcolor }, data, setData } = useContext(AppContext)

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			try {
				const response = await axios.get('http://localhost:8080/zonas');
				if (response.status) {
					setLoading(false)
					setData(response.data)
				}
			} catch (error) {
				console.log(error);
				setLoading(false)
			}
		}
		getData();
	}, [setData])

	if (loading) {
		return (
			<p> Cargando Información... </p>
		)
	}

	return (
		<>
			{data.length > 0
				? data.map((item) => (
					<ul className='container_list' key={item.id} >
						<li>{item.nombre}</li>
						<div>
							<button>Edit</button>
							<button>Delete</button>
						</div>
					</ul>
				))
				: null
			}
			<div>-{color}-</div>
			<button onClick={() => setcolor('blue')}>Cambio</button>
		</>
	);
}

export default Home;

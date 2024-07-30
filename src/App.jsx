// import React, { useState } from 'react';
// import { useGetCarsQuery, useAddCarMutation, useUpdateCarMutation, useDeleteCarMutation } from './api/api';
// import './App.css';

// function App() {
//   const { data: cars, error, isLoading } = useGetCarsQuery();
//   const [addCar] = useAddCarMutation();
//   const [updateCar] = useUpdateCarMutation();
//   const [deleteCar] = useDeleteCarMutation();

//   const [newCar, setNewCar] = useState({ name: '', brand: '' });

//   const handleAddCar = async () => {
//     await addCar(newCar);
//     setNewCar({ name: '', brand: '', year: '' });
//   };

//   const handleUpdateCar = async (id) => {
//     await updateCar({ id, name: 'Updated Name' });
//   };

//   const handleDeleteCar = async (id) => {
//     await deleteCar(id);
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error occurred</div>;

//   return (
//     <div className="container">
//       <h1>Cars</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Brand</th>
//             <th>Year</th>
//             <th className='action'>Actions</th>

//           </tr>
//         </thead>
//         <tbody>
//           {cars.map((car) => (
//             <tr key={car.id}>
//               <td>{car.name}</td>
//               <td>{car.brand}</td>
//               <td>{car.year}</td>
//               <td>
//                 <button onClick={() => handleUpdateCar(car.id)}>Update</button>
//                 <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Name"
//           value={newCar.name}
//           onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Brand"
//           value={newCar.brand}
//           onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Year"
//           value={newCar.year}
//           onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
//         />
//         <button onClick={handleAddCar}>Add Car</button>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { useGetCarsQuery, useAddCarMutation, useUpdateCarMutation, useDeleteCarMutation } from './api/api';
import './App.css';

function App() {
  const { data: cars, error, isLoading } = useGetCarsQuery();
  const [addCar] = useAddCarMutation();
  const [updateCar] = useUpdateCarMutation();
  const [deleteCar] = useDeleteCarMutation();

  const [newCar, setNewCar] = useState({ name: '', brand: '', year: '' });

  const handleAddCar = async () => {
    if (!newCar.name || !newCar.brand || !newCar.year) {
      alert('All fields are required!');
      return;
    }
    try {
      await addCar(newCar);
      setNewCar({ name: '', brand: '', year: '' });
    } catch (error) {
      alert('Failed to add car');
    }
  };

  const handleUpdateCar = async (id) => {
    try {
      await updateCar({ id, name: 'Updated Name' });
    } catch (error) {
      alert('Failed to update car');
    }
  };

  const handleDeleteCar = async (id) => {
    try {
      await deleteCar(id);
    } catch (error) {
      alert('Failed to delete car');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div className="container">
      <h1>Cars</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Year</th>
            <th className='action'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars?.map((car) => (
            <tr key={car.id}>
              <td>{car.name}</td>
              <td>{car.brand}</td>
              <td>{car.year}</td>
              <td>
                <button onClick={() => handleUpdateCar(car.id)}>Update</button>
                <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="input-contant">
        <input
          type="text"
          placeholder="Name"
          value={newCar.name}
          onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Brand"
          value={newCar.brand}
          onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })}
        />
        <input
          type="number"
          placeholder="Year"
          value={newCar.year}
          onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
        />
        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </div>
  );
}

export default App;

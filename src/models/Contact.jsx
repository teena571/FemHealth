import React from 'react';

const Contact = ({ closeForm }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='popup-form absolute mt-12 text-black'>
        <form className='w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl shadow-lg'>
          <h1 className='text-4xl font-semibold text-center text-[#FF6F61]'>Book Now</h1>
          
          <div className='flex flex-col'>
            <input 
              type="text" 
              name='userFirstName' 
              id='userFirstName' 
              placeholder='First Name' 
              className='py-3 px-2 bg-[#FFD1DC] rounded-lg placeholder-gray-700' 
            />
          </div>

          <div className='flex flex-col'>
            <input 
              type="text" 
              name='userLastName' 
              id='userLastName' 
              placeholder='Last Name' 
              className='py-3 px-2 bg-[#FFD1DC] rounded-lg placeholder-gray-700' 
            />
          </div>

          <div className='flex flex-col'>
            <input 
              type="email" 
              name='userEmail' 
              id='userEmail' 
              placeholder='Your Email' 
              className='py-3 px-2 bg-[#FFD1DC] rounded-lg placeholder-gray-700' 
            />
          </div>

          <div className='flex flex-col'>
            <input 
              type="number" 
              name='userNumber' 
              id='userNumber' 
              placeholder='Phone Number' 
              className='py-3 px-2 bg-[#FFD1DC] rounded-lg placeholder-gray-700' 
            />
          </div>

          <div className='flex gap-5'>
            <button className='bg-[#FF6F61] text-white px-6 py-2 rounded-md hover:bg-[#FF9671] transition-all'>
              Book Appointment
            </button>
            <button 
              className='bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-all' 
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

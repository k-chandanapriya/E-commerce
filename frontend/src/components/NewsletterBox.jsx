import React from 'react'

const NewsletterBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email?.value;
    console.log('Newsletter signup:', email);
  };

  return (
    <div className='text-center py-12 px-4 bg-gray-50 rounded'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-sm text-gray-600 mt-2'>No spam — just product updates and deals.</p>
      <form onSubmit={handleSubmit} className='mt-4 flex flex-col sm:flex-row gap-2 max-w-lg mx-auto'>
        <input
          name='email'
          type='email'
          placeholder='Enter your email'
          className='flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
        />
        <button type='submit' className='px-4 py-2 bg-black text-white text-sm rounded'>
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox
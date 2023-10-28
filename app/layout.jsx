import React from 'react'
import '@styles/global.css'


export const metadata = {
  title: 'Promptl',
  description:'Discover & share AI prompts'
}

const layout = ({children}) => {
  return (
    <html lang='en'>
     <body>
      <main className='text-center'>
        {children}
      </main>
     </body>
    </html>
  )
}

export default layout
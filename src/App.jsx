import { useState } from 'react'
import { useEffect } from 'react'
import View_login from './views/View_login'
import View_Test from './views/View_Test'
import View_chatbot from './views/View_chatbot'

function App() {

  return (
    <>
     <View_login >  
     </View_login>


     <View_Test className='dNone'>
     </View_Test>

     <View_chatbot className='dNone'></View_chatbot>
    </>
  )
}

export default App

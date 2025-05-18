import { useState } from 'react'
import { useEffect } from 'react'
import View_login from './views/View_login'
import View_Test from './views/View_Test'
import { consult_tests } from './scripts/consult_tests'

function App() {

  return (
    <>
     <View_login >  
     </View_login>


     <View_Test className='dNone'>
     </View_Test>
    </>
  )
}

export default App

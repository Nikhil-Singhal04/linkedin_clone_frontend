import React, { useState } from 'react'
import Profilesection from '../components/Profilesection'
import Createpost from '../components/Createpost'
import Feed from '../components/Feed'

const HomePage = () => {
  const [reloadSignal, setReloadSignal] = useState(0);

  return (
    <div className='flex gap-30 justify-center mt-6'>
    {/* left section */}
      <div className='mt-10'>
          <Profilesection />
      </div>
      {/* right section */}
      <div className='mt-10'>
          <Createpost onPostCreated={() => setReloadSignal((v) => v + 1)} />
          <Feed reloadSignal={reloadSignal} />
      </div>
    </div>
  )
}

export default HomePage
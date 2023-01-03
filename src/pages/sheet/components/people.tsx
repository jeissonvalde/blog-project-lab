
function People (params:any) {
  let peopleList = [
    {
      img: {
        src: '',
        style: '',
      },
      transformInitial: '',
      transform: ''
    },
    {
      img: {
        src: '',
        style: '',
      },
      transformInitial: '',
      transform: ''
    },
    {
      img: {
        src: '',
        style: '',
      },
      transformInitial: '',
      transform: ''
    },
  ]


  return (
    <div className="sheet-people">

      <ul>
        {peopleList.map((p, idx) => {

          return (
            <li></li>
          )
        })}
      </ul>
    </div>
  )
}

export default People
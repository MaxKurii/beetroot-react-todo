function fetchTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos/',{
      method:"GET",
      
    })
    .then(response=>{
      return response.json()

    })
    .then(data=>{
      const items = data.reduse((acc,current)=>({
        ...acc,
        [current.id]:current
      }))
      setTodos(items);
    })
    .finally(()=>setLoading(false))
  }


export {
  fetchTodos
}
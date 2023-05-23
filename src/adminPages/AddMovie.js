import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createMovie } from '../features/movies/movieSlice'

import Spinner from '../components/Spinner'
import '../CSS/Admin.css'


const AddMovie = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user, isLoading} = useSelector((state)=> state.auth)
  
  
  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  }, [user, dispatch])

   const [title, setTitle] = useState('')
   const [language, setLanguage] = useState('')
    const [hero, setHero] = useState('')
    const [heroine, setHeroine] = useState('')
    const [director, setDirector] = useState('')
    const [producer, setProducer] = useState('')
    const [year, setYear] = useState('')
    const [genres, setGenres] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [video, setVideo] = useState('')
    

    const handleThumbnail = (e)=>{
        setThumbnail(e.target.files[0])
    }
    const handleVideo= (e) =>{
        setVideo(e.target.files[0])
    }

    const btnSubmit = async (e) =>{
        e.preventDefault()
        
        const formData = new FormData();
        formData.append('title',title)
        formData.append('language',language)
        formData.append('hero',hero)
        formData.append('heroine',heroine)
        formData.append('director',director)
        formData.append('producer',producer)
        formData.append('year',year)
        formData.append('genres',genres)
        formData.append('thumbnail',thumbnail)
        formData.append('video',video)
        // console.log([...formData])

        dispatch(createMovie(formData))
                setTitle('')
                setLanguage('')
                setHero('')
                setHeroine('')
                setDirector('')
                setProducer('')
                setYear('')
                setGenres('')
                setThumbnail('')
                setVideo('')

        // try{
        //     const res = await axios.post('http://localhost:5000/movie', formData);
        //     console.log(res)
        //     if(res.status==200 || res.status==201){
        //         setTitle('')
        //         setLanguage('')
        //         setHero('')
        //         setHeroine('')
        //         setDirector('')
        //         setProducer('')
        //         setYear('')
        //         setGenres('')
        //         setThumbnail('')
        //         setVideo('')
        //     }
        // }catch(err){
        //     console.log('ohhhhh',err)
        // }
    }
    
    
    if (isLoading) {
      return <Spinner />
    }
  

  return (
    <div className='mt-3'>
        
        <section className='form'>
        <form onSubmit={btnSubmit} encType='multipart/form-data'>

          <div className='form-group'>
          <label htmlFor="title" className="form-label">Movie Name</label>
            <input
              type='text'
              className='form-control'
              id='title'
              name='title'
              value={title}
              placeholder='Enter Movie Title'
              onChange={e=> setTitle(e.target.value)}
            />
          </div>

          <div className='form-group'>
          <label htmlFor="language" >Language</label>

            <input
              type='text'
              className='form-control'
              id='language'
              name='language'
              value={language}
              onChange={e=> setLanguage(e.target.value)}
            />
          </div>
          
          <div className='form-group'>
          <label htmlFor="title" className="form-label">Hero</label>

            <input
              type='text'
              className='form-control'
              id='hero'
              name='hero'
              value={hero}
              onChange={e=> setHero(e.target.value)}
            />
          </div>

          <div className='form-group'>
          <label htmlFor="title" className="form-label">Heroine</label>

            <input
              type='text'
              className='form-control'
              id='heroine'
              name='heroine'
              value={heroine}
              onChange={e=> setHeroine(e.target.value)}
            />
          </div>

          <div className='form-group'>
          <label htmlFor="title" className="form-label">Director</label>

            <input
              type='text'
              className='form-control'
              id='director'
              name='director'
              value={director}
              onChange={e=> setDirector(e.target.value)}
            />
          </div>

          <div className='form-group'>
          <label htmlFor="title" className="form-label">Producer</label>

            <input
              type='text'
              className='form-control'
              id='producer'
              name='producer'
              value={producer}
              onChange={e=> setProducer(e.target.value)}
            />
          </div>

          <div className='form-group'>
          <label htmlFor="title" className="form-label">Year</label>

            <input
              type='text'
              className='form-control'
              id='year'
              name='year'
              value={year}
              onChange={e=> setYear(e.target.value)}
            />
          </div>

          <div className='form-group'>
          <label htmlFor="title" className="form-label">Genres</label>

            <input
              type='text'
              className='form-control'
              id='genres'
              name='genres'
              placeholder='e.g.  Action Crime Comedy '
              value={genres}
              onChange={e=> setGenres(e.target.value)}
            />
          </div>

          <div className="form-group">
                <label htmlFor="thumbnail" className="form-label">Thumbnail: </label>
                <input type="file" className="form-control"  id="thumbnail" name="thumbnail"
                    onChange={handleThumbnail}
                />   
            </div>
            <div className="form-group">
                <label htmlFor="video" className="form-label">Movie: </label>
                <input type="file" className="form-control" id="video" name="video"
                    onChange={handleVideo}
                />   
            </div>   


          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Add
            </button>
          </div>
        </form>
      </section>
      <br/>
      <br/>
    </div>
  )
}

export default AddMovie

// const [movie, setMovie] = useState({
    //     name:'', hero:'', heroine:'', year: '', thumbnail :'', video:''
    // })

    // const handleInput = (e)=>{
    //     setMovie({
    //         ...movie, 
    //         [e.target.name]:e.target.value
    //     })
    // }

    // const handleMedia = (e) => {
    //     // cloudinary -> payload -> e.target.files[0]
    //     // setMovie({
    //     //     ...movie, 
    //     //     [e.target.name]: 'link'
    //     // })
    //     // return 'link';
    // }


// const handleVideo = (e)=>{
    //     // console.log(e.target.files[0])
    //     setVideo(e.target.files[0])
    //     // console.log(video)

    // }
    // const btnSubmit = async (e)=>{
    //     e.preventDefault()
    //     console.log(name)
    //     console.log(hero)
    //     console.log(heroine)
    //     console.log(year)
    //     console.log(thumbnail)
    //     console.log(video)

    //     const formData = new FormData()
    //     formData.append('name',name)
    //     formData.append('hero',hero)
    //     formData.append('heroine',heroine)
    //     formData.append('year',year)
    //     formData.append('thumbnail',thumbnail)
    //     formData.append('video',video)

    //     fetch('http://localhost:5000/api/action',{
    //         method: 'POST',
    //         body: formData
    //     }).then((res)=> {
    //         console.log('success', res)
    //     }).catch(err=>{
    //         console.log('errrrror', err)
    //     })


    //     // const res = await axios.post('/api/action', {
    //     //     name, hero, heroine, year, thumbnail, video
    //     // })


    //     // const getResults = async () => {
    //     //     try {
    //     //         const res = await axios.get("/api/action",{
    //     //             name, hero, heroine, year, thumbnail, video
    //     //         });
    //     //     } catch (err) {
    //     //         console.log(`error occred.. ${err}`);
    //     //     }
    //     // };


    //     // getResults();

    //     axios.post('/api/action',{name,hero,heroine,year,thumbnail,video}).then(res=>{
    //         console.log(res)
    //       }).catch(err=> console.log(`error occred.. ${err}`))
    // }

    // const handleSubmit = async (e)=>{
    //     e.preventDefault()
    //     console.log(movie)
    //     try{
    //         const submitData= await axios.post('/api/action', movie,{
    //             headers: {
    //               'Content-Type': 'multipart/form-data'
    //             }
    //         })
    //         submitData()
    //         // if(submitData.data){
    //         //     console.log('succeed')
    //         // }
    //         // else{
    //         //     console.log('-_-')
    //         // }
    //     }catch(err){
    //         console.log(`error occured \n ${err}`)
    //     }  
    // }    Now its useless
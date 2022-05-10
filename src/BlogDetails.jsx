import {useParams} from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {
const {id} = useParams ();
const {data:blog, error, isPendindg} useFetch ('http://localhost:3000')

const deleteBlog = () =>{

}
}
import MovieCard from '@/components/MovieCard'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import { useRouter } from 'expo-router';
import { View, Text, Image, FlatList } from 'react-native'

//hello git
//im adding fom freateure-branch
// added to sss
const search = () => {
  const router=useRouter();
  const {
    data:movies
    , loading:moviesLoagin
    , error:moviesError}=useFetch(()=>fetchMovies({
      query:''
    }

  ));

  return (
    <View className='flex-1 bg-primary '>
      <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover' />

      <FlatList data={movies} renderItem={({item})=><MovieCard {...item} />} 
      keyExtractor={(item)=>item.id.toString()}
      className='px-5'
      numColumns={3}
      columnWrapperStyle={
        {
          justifyContent:'center',
          gap:16,
          marginVertical:16

        }
      }
      contentContainerStyle={{paddingBottom:100}}
      
      />

    </View>
  )
}

export default search
import { FlatList, StyleSheet } from 'react-native';
import react, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import FavoritosComp from '../components/FavoritosComp';
import { deleteFavorito } from '../store/actions/Favoritos.action';
import { loadFavoritos } from '../store/actions/Favoritos.action';

//import { FAVORITOSDATA } from '../data/FavoritosData';



function FavoritosScreen() 
{
    const dispatch = useDispatch();
    const favoritos = useSelector(state => state.favoritos);

    useEffect(() => {
        dispatch(loadFavoritos())
    }, [])

    const handlerDeleteFavorito = (id) => {
        dispatch(deleteFavorito(id))
    }

    const renderFavoritosItem = ({ item }) => (
        <FavoritosComp 
            item={item} 
            onDeleteFavorito={() => handlerDeleteFavorito(item.id)}
        />
    );

    return (
        <FlatList
            data={favoritos.favoritos}
            keyExtractor={item => item.id}
            renderItem={renderFavoritosItem}
            //numColumns={2}
        />
  );
};

const styles = StyleSheet.create({
});

export default FavoritosScreen;
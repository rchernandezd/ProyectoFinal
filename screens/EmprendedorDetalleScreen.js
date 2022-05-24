import { FlatList, StyleSheet } from 'react-native';

import EmprendedorDetalleComp from '../components/EmprendedorDetalleComp';
import react from "react";
import { useSelector } from 'react-redux';

//import { EMPRENDEDORESDATA } from '../data/EmprendedoresData';



function EmprendendedorDetalleScreen({ navigation, route }) 
{

    // console.log("DETALLE EMPRENDEDOR: " + route.params.EmprendedorID);
    // const Emprendedor = EMPRENDEDORESDATA.filter(Emprendedores => Emprendedores.id === route.params.EmprendedorID);
    // console.log("Despues de Filtrar: " + Emprendedor[0].id);

    const Emprendedor = useSelector(state => state.emprendedores.seleccionado)

    // const ColegioSel = useSelector(state => state.colegios.colegio)
    // console.log('Nombre Coelgio: ' + ColegioSel.nombre);

    
    // const DatosUsuarioAutenticado = useSelector(state => state.usuarios.usuarioAutenticado);
    // console.log('Datos Usuario: ' + DatosUsuarioAutenticado.id + DatosUsuarioAutenticado.nombre + DatosUsuarioAutenticado.imagenColegio);

    // const email = useSelector(state => state.auth.user);
    // console.log('email: ' +  email);

    //console.log("DETALLE EMPRENDEDOR: " + Emprendedor.nombreEmprendedor + " " + Emprendedor.id)

    // const handleSelectedProductoDetalle = (item) => {
    //     navigation.navigate('DetalleProducto', {
    //         productoID: item.id,
    //         nombre: item.nombreProducto,
    //     });
    //}

    // const renderEmprendedorItem = ({ item }) => (
    //     <EmprendedorDetalleComp item={item}/>
    // );

    return (
        // <FlatList
        //     data={Emprendedor}
        //     keyExtractor={item => item.id}
        //     renderItem={renderEmprendedorItem}
        // />
       <EmprendedorDetalleComp item={Emprendedor}/>

  );
};

const styles = StyleSheet.create({
});

export default EmprendendedorDetalleScreen;
import { If, Image, StyleSheet, Text, View } from 'react-native';

import color from '../constants/color.js';
import react  from 'react';
import { useSelector } from 'react-redux';

const ImageHeaderComp = (props) => {
    const { item } = props;
       
    
    const sesionActiva = useSelector(state => state.auth.sesionActiva);
    const ingresarInvitado = useSelector(state => state.auth.ingresarInvitado);
    const imagenColegio = null;
    const colegioUsuario = null;
    const NombreColegio = null;
    let content=null;


    if ( (sesionActiva))
    {  const usuarios = useSelector(state => state.usuarios.usuarios);
       const email = useSelector(state => state.auth.user);
       const colegios = useSelector(state => state.colegios.colegios);
      //  console.log('Colegios: ' + colegios[0].id + colegios[0].nombre + colegios[0].imagen + '-' + colegios[1].id + colegios[1].nombre);
       const usuIngresado = usuarios.find(usuario => usuario.email === email );
       const colegioUsuario = colegios.find(colegio => colegio.id === usuIngresado.idColegio );
       const imagenColegio = colegioUsuario.imagen;
       const nombreColegioInvitado = colegioUsuario.nombre;
      //  console.log('Nombre Colegio: ' +  colegioUsuario.nombre);
      //  console.log('email: ' +  email);

      //  console.log(usuIngresado.idColegio +  usuIngresado.nombre);

      //  console.log('ImageCole: ' + imagenColegio);
       //content = <Image source={imagenColegio} style={{ marginTop: 10, marginLeft: 100 , width: 140, height: 45 }}  /> 
       content = <Text style={{ marginTop: 20, marginLeft: 100, color: color.Azul, fontWeight: 'bold', fontSize: 17 }}>{nombreColegioInvitado}</Text>
       
       const DatosUsuarioAutenticado = useSelector(state => state.usuarios.usuarioAutenticado);
       if (DatosUsuarioAutenticado === null)
       {  console.log('DatosUsuarioAutenticado Nulo');}
       else
        { 
          console.log('NombreUsuarioAutenticado: ' +  DatosUsuarioAutenticado.nombre);}

        //imagenColegio = UsuarioAutenticado.imagenColegio;

      //  let imagenColegio = UsuarioAutenticado.imagenColegio
      // console.log('ImagenColegio: ' + imagenColegio)
     }
     else
      if (ingresarInvitado)
      { //const colegioSeleccionado = useSelector(state => state.auth.nombreColegioInvitado);
        // const imagenColegioInvitado = useSelector(state => state.auth.imagenColegioInvitado);
        const nombreColegioInvitado =  useSelector(state => state.auth.nombreColegioInvitado);
        // content = <Image source={imagenColegioInvitado} style={{ marginTop: 10, marginLeft: 100 , width: 140, height: 45 }}  />
        content = <Text style={{ marginTop: 20, marginLeft: 100, color: color.Azul, fontWeight: 'bold' }}>{nombreColegioInvitado}</Text>
      }

    return (
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../assets/BuhoSM.png')}
          />
          {/* <Text style={{marginTop: 15, marginLeft:60, color: color.blue, fontSize: 15 }}>{item}</Text> */}
          {/* <Image source={imagenColegio} style={{ width: 140, height: 35 }}  /> */}
          
          {/* { ((ingresarInvitado) || (sesionActiva))
              ? <Text style={{marginTop: 15, marginLeft:120, color: color.blue, fontSize: 15 }}>{{NombreColegio}}</Text>
              : <Text>No Ingresado</Text>
          } */}

          {content}
          
        </View>
    );
}


const styles = StyleSheet.create({

});

export default ImageHeaderComp;
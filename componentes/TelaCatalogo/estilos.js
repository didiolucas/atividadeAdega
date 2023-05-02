import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  containerScroll: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20
  },
  cardVinho: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#805050',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
  },
  vinhoImg: {
    width: 50,
    height: 100,
    borderRadius: 50,
    marginRight: 20
  },
  cardBoxDescricao: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 20
  },
  cardTitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    color: '#ffffff',
  },
  cardDescricao: {
    fontSize: 12,
    textAlign: 'left',
    marginBottom: 10,
    color: '#ffffff',
  },
});

export default estilos;
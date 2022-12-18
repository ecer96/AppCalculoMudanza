import Nav from './componentes/Nav';
import Titulo from './componentes/Titulo';
import Cards from './componentes/Cards';
import Btncalc from './componentes/Btncalc';






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
       </header>
       
       <body>
         
        
          <Titulo/>
        

        
          <div className='contenedor-cards'>
            <Cards titulo='Bed' imagen='casa' m2={1.2} />
            <Cards titulo='refrigerator' imagen='refrigerador' m2={1}/>
            <Cards titulo='furniture' imagen='furniture' m2={.5}/>
            <Cards titulo='oven' imagen='oven' m2={0.6}/>
            <Cards titulo='sofa' imagen='sofa' m2={1.5}/>
            <Cards titulo='tv' imagen='tv' m2={.25}/>
            <Cards titulo='washer-dryer' imagen='washerdryer' m2={.5}/>
            <Cards titulo='dining' imagen='dining' m2={2}/>
            <Cards titulo='desk' imagen='desk' m2={.75}/>
            <Cards titulo='wardrobe' imagen='wardrobe' m2={3.2}/>
          </div>
          

         <Btncalc/>
            
     
          
          
       </body>
    </div>
  );
}

export default App;

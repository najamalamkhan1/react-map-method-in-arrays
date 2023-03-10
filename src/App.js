import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';

function App() {
  // ******************* This is an array which contains multipule object****************
  var mycard = [
    
    {
      img: 'https://images.pexels.com/photos/14246458/pexels-photo-14246458.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      name: 'A house',
      details: 'A house is a building that is designed for people to live in. It typically consists of one or more stories, with a roof, walls, and a floor. Houses may also have a garage, a yard, and other features such as a porch or deck.',
      button:'Facebook'
    },
    {
      img:'https://images.pexels.com/photos/14771128/pexels-photo-14771128.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      name: 'A school',
      details: 'A  school is a place where people go to learn. Schools can be public or private, and can provide education for students at various levels, from elementary school to high school to college or university.',
      button:'Facebook'
    },
    {
      img:'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'A classic car',
      details:'A classic car is a vehicle that is considered to have historical or collector value. Classic cars are typically at least 25 years old, and are often prized for their unique design, craftsmanship, or cultural significance.',
      button:'Facebook',
    },

  ];
  // *************************Loop on array with the help of for loop***************
  // let newcard =[]  
  //   for (let i = 0; i < mycard.length; i++) {
  //       newcard.push(
  //         <div>
  //           name:<h3>{mycard[i].name}</h3>
  //           details:<h3>{mycard[i].details}</h3>
  //         </div>
  //       )
  // }
  // **************************For loop on array end**********************************

  // *****************Using ofƒarray.map method for using loop on array****************
  var newcard = mycard.map(
    (item) => {
      return(

        // *****************this section is for loop**********************
        // * <div>                                                       *
        // * name:<h3>{item.name}</h3>                                   *
        // * details:<h3>{item.details}</h3>                             * 
        // * </div>                                                      *
        // *****************this section is for loop**********************
          <Cards data = {item} />
        )
      
    })

  return (

    <>
      {newcard}
    </>
  );
}
export default App;

import React, { FC, useContext, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from '..';
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import background from "../assets/CoursesMax/ArtTherapy/RestorationBroken/bgRestorationBroken.png";
import bgpage from "../assets/CoursesMax/ArtTherapy/RestorationBroken/bgpage.png";
import star from "../assets/CoursesMax/ArtTherapy/RestorationBroken/star.png";
import hugs from "../assets/CoursesMax/ArtTherapy/RestorationBroken/hugs.png";
import quote from "../assets/CoursesMax/ArtTherapy/RestorationBroken/quote.png";
import block1 from "../assets/CoursesMax/ArtTherapy/RestorationBroken/block1.png";
import smallItem from "../assets/CoursesMax/ArtTherapy/RestorationBroken/smalItem.png";
import Header from '../components/Header';
import Footer from '../components/Footer';

const useStyles = makeStyles(theme => ({
   root: {
      fontFamily: 'Roboto Slab',
      backgroundColor: '#F5F5F5'
   },
   header: {
      backgroundImage: `url(${background})`,
   },
   holder: {
      color: '#fff'
   },
   ladelHolder: {
      border: '1px solid #FFFFFF',
      borderRadius: 42,
      textAlign: 'center',
      marginTop: 60
   },
   label: {
      fontWight: 'bold',
      fontSize: 20,
      padding: 4
   },

   titleHolder: {
      fontSize: 64,
      fontWeight: 100,
      marginTop: 100,

   },
   decoratrionTitle: {
      fontWeight: 900,
      backgroundColor: '#fff',
      color: '#000'
   },

   subHolder: {
      marginTop: 40,
      fontWeight: 100,
      fontSize: 24,
      marginBottom: 40,
      color: '#C2C2C2'

   },

   description: {
      marginTop: 40,
      fontWeight: 100,
      fontSize: 18,
      marginBottom: 100,
      color: '#fff',
      width: '50%'
   },

   forWho: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 130
   },
   page: {
      backgroundImage: `url(${bgpage})`,

   },

   titleSection: {
      fontWeight: 900,
      fontSize: 48,
      textAlign: 'center',
      color: '#fff',
      marginTop: 40,
      marginBottom: 40
   },
   aboutHolder: {
      width: 332,
      height: 405,
      background: 'rgba(255, 255, 255, 0.2)',
      opacity: 0.8,
      borderRadius: 30,
   },


   aboutNumber: {
      fontWeight: 200,
      fontSize: 90,
      color: "#fff",
      marginLeft: 20
   },

   aboutText: {
      fontWeight: 300,
      fontSize: 22,
      color: "#fff",
      marginLeft: 20
   },
   aboutWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
   },

   subtitleSection: {
      color: '#747474',
      fontWeight: 900,
      marginTop: -10,
      fontSize: 23

   },
   underline: {
      width: 243,
      height: 6,
      backgroundColor: '#FFFFFF',
      marginTop: 10,
   },

   storyHolder: {
      margin: 40,

   },

   storyNumber: {
      fontWeight: 900,
      fontSize: 22,
      color: "#fff",
      marginBottom: 40
   },

   storyText: {
      fontWeight: 100,
      fontSize: 22,
      color: "#fff",
   },

   contanerQuote: {
      borderTop: '1px solid #fff',
      borderBottom: '1px solid #fff',
      fontWeight: 900,
      fontSize: 32,
      color: '#fff',
      padding: 50,
      marginTop: 40,
      marginBottom: 120,
      marginRight: 80,


   },

   infoNumber: {
      fontWeight: 900,
      fontSize: 29,
      marginLeft: 20,
      color: '#fff',
      lineHeight: 1.1,
      marginTop: 10,
      marginBottom: 10


   },

   infoText: {
      fontWeight: 100,
      fontSize: 18,
      color: '#fff',
      marginLeft: 20
   },

   smallContainer: {
      background: '#F5F5F5',
      border: '3px solid #2C003C',
      borderRadius: 30,
      color: '#000',
      textAlign: 'center',
      padding: 20,
      marginRight: 70,
      marginTop: 120,
      marginBottom: 70
   },

   smallWrapper: {
      borderTop: '3px solid #7A00A6',
      borderBottom: '3px solid #7A00A6',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'

   },


   smallTextTitle: {
      fontSize: 24,
      fontWeight: 600
   },

   smallText: {
      fontSize: 20,
      fontWeight: 300,
      marginTop: 10
   },

   program: {
      background: '#000',
      fontFamily: 'Roboto Slab'
   },


   prorgamBlock: {
      background: '#F5F5F5',
      borderRadius: 30,
      color: '#000',
      marginRight: 70,
      marginTop: 120,
      display: 'flex',
      flexDirection: 'row'
   },

   blockName: {
      fontSize: 32,
      fontWeight: 900,
      position: 'absolute',
      color: '#fff',
      marginTop: 75,
      marginLeft: 85
   },

   blockSmall: {
      fontSize: 12,

   },
   blockTitle: {
      fontSize: 24,
      marginLeft: 20,
      marginBottom: 20,
      fontWeight: 900

   },
   blockList: {
      fontSize: 18,
      marginLeft: 20,
      fontWeight: 400
   }


}));





const RestoreBrokenCourse: FC = () => {
   const classes = useStyles()
   const { store } = useContext(Context);
   const videoResurse = "https://drive.google.com/file/d/1rN4IONbP4DNruCXhKianLwU7u6SfpbyH "
   return (
      <div>
         <div className={classes.root}>
            <Header />
            <div className={classes.header}>
               <Container fluid="xxl">
                  <Row >
                     <Col>
                        <div className={classes.holder}>
                           <div>
                              <div>
                                 <Row >
                                    <Col xs={2}>
                                       <div className={classes.ladelHolder}>
                                          <div className={classes.label}>
                                             Art-Therapy

                                          </div>
                                       </div>
                                    </Col>
                                 </Row>
                                 <Row >
                                    <Col>
                                       <div className={classes.titleHolder}>
                                          Методы  <span className={classes.decoratrionTitle}> Арт-терапии </span>
                                       </div>
                                    </Col>
                                 </Row>
                                 <Row >
                                    <Col>
                                       <div className={classes.subHolder}>
                                          Познакомим вас с  Aрт-терапией
                                       </div>
                                    </Col>
                                 </Row>
                                 <Row >
                                    <Col>
                                       <div className={classes.description}>
                                          Покажем эффективность и практичность арт-терапии в работе с людьми как в группе, так и индивидуально.Предупредим о возможных перегибах при применении этого метода и поделимся основными алгоритами и принципами работы.
                                       </div>
                                    </Col>
                                 </Row>
                                 <Row >
                                    <Col sm={3} style={{ marginBottom: 100 }}>
                                       <Button fullWidth variant='contained' style={{ color: '#fff', backgroundColor: '#8741A2', margin: 10 }}>
                                          Купить курс
                                       </Button>
                                    </Col>
                                    <Col sm={1}>
                                    </Col>
                                    <Col sm={2}>
                                       <div >
                                          Длительность:
                                       </div>
                                       <div>
                                          15 часов
                                       </div>
                                    </Col>
                                    <Col sm={2}>
                                       <div>
                                          Цена:
                                       </div>
                                       <div>
                                          100$
                                       </div>
                                    </Col>
                                    <Col sm={2}>
                                       <div>
                                          Старт:
                                       </div>
                                       <div>
                                          в любое время
                                       </div>
                                    </Col>
                                 </Row>

                                 <Row >
                                    <Col>
                                       <div className={classes.subHolder}>
                                          Кому будет полезен курс:

                                       </div>
                                    </Col>
                                 </Row>

                                 <Row >
                                    <Col>
                                       <div className={classes.forWho}>
                                          <img src={star} alt='star' style={{ marginRight: 20 }} />
                                          <div>
                                             Тем, кто хочет сменить <br /> профессию
                                          </div>
                                       </div>
                                    </Col>
                                    <Col>
                                       <div className={classes.forWho}>
                                          <img src={star} alt='star' style={{ marginRight: 20 }} />
                                          <div>
                                             Тем, кто хочет сменить <br /> профессию
                                          </div>
                                       </div>
                                    </Col>
                                    <Col>
                                       <div className={classes.forWho}>
                                          <img src={star} alt='star' style={{ marginRight: 20 }} />
                                          <div>
                                             Тем, кто хочет сменить <br /> профессию
                                          </div>
                                       </div>
                                    </Col>
                                 </Row>
                              </div>
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>

            <div className={classes.page}>
               <Container fluid="xxl" >

                  <Row >
                     <Col >
                        <div className={classes.titleSection}>
                           О чем этот курс?
                        </div>
                     </Col>
                  </Row>
                  <Row >
                     <Col lg={4}  >
                        <div className={classes.aboutHolder}>
                           <div className={classes.aboutNumber}>
                              01

                           </div>
                           <div className={classes.aboutText}>
                              Вы узнаете, как не попасть в ловушки популярных синдромов. Научитесь выявлять их у себя и близких. И главное — получите практические методы борьбы с ними.
                           </div>
                        </div>
                     </Col>
                     <Col lg={4}>
                        <div className={classes.aboutHolder}>
                           <div className={classes.aboutNumber}>
                              02

                           </div>
                           <div className={classes.aboutText}>
                              Вы узнаете, как не попасть в ловушки популярных синдромов. Научитесь выявлять их у себя и близких. И главное — получите практические методы борьбы с ними.
                           </div>
                        </div>
                     </Col>
                     <Col lg={4}>
                        <div className={classes.aboutHolder}>
                           <div className={classes.aboutNumber}>
                              03

                           </div>
                           <div className={classes.aboutText}>
                              Вы узнаете, как не попасть в ловушки популярных синдромов. Научитесь выявлять их у себя и близких. И главное — получите практические методы борьбы с ними.
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Container>


               <Container fluid="xxl" >

                  <Row >
                     <Col >
                        <div className={classes.titleSection} style={{ textAlign: 'left', marginBottom: 10 }}>
                           Как работает арт терапия:
                        </div>
                        <div className={classes.subtitleSection}>
                           расскажем на примере разбитого стакана
                        </div>
                        <div className={classes.underline}>

                        </div>


                        <div className={classes.aboutText} style={{ textAlign: 'left', marginLeft: 0, marginTop: 30, marginBottom: 30 }}>
                           Представьте, что <b > вы разбили</b>  стакан дома.
                           Чтобы это имправить, придется пройти <br /> через несколько простых шагов.
                        </div>
                     </Col>
                  </Row>
                  <Row >
                     <Col lg={4}  >
                        <div className={classes.storyHolder}>
                           <div className={classes.storyNumber}>
                              ВЫ РАССТРАИВАЕТЕСЬ

                           </div>
                           <div className={classes.storyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu interdum tempor aliquam in tincidunt aliquet nibh. Enim facilisis dolor sed sit.     </div>
                        </div>
                     </Col>
                     <Col lg={4}>
                        <div className={classes.storyHolder}>
                           <div className={classes.storyNumber}>
                              ВЫ РАССТРАИВАЕТЕСЬ

                           </div>
                           <div className={classes.storyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu interdum tempor aliquam in tincidunt aliquet nibh. Enim facilisis dolor sed sit.     </div>
                        </div>
                     </Col>
                     <Col lg={4}>
                        <div className={classes.storyHolder}>
                           <div className={classes.storyNumber}>
                              ВЫ РАССТРАИВАЕТЕСЬ

                           </div>
                           <div className={classes.storyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu interdum tempor aliquam in tincidunt aliquet nibh. Enim facilisis dolor sed sit.     </div>
                        </div>
                     </Col>
                  </Row>

                  <Row >
                     <Col>
                        <div className={classes.contanerQuote}>
                           <img src={quote} alt='star' style={{ position: 'absolute', marginLeft: -40, marginTop: -40 }} />
                           И ещё много разных специалистов стоит за каждым из сервисов. Вы тоже можете в этом участвовать. Главное — найти то, что ближе вашим интересам и способностям. Этим и займёмся на курсе.
                        </div>
                     </Col>
                  </Row>


                  <Row >
                     <Col lg={4}  >
                        <div className={classes.aboutHolder}>
                           <img src={hugs} alt='star' />

                           <div className={classes.infoNumber}>
                              Вы интересуетесь психолгией
                           </div>
                           <div className={classes.infoText}>
                              Вы узнаете, как не попасть в ловушки популярных синдромов. Научитесь выявлять их у себя и близких. И главное — получите практические методы борьбы с ними.
                           </div>
                        </div>
                     </Col>
                     <Col lg={4}>
                        <div className={classes.aboutHolder}>
                           <img src={hugs} alt='star' />

                           <div className={classes.infoNumber}>
                              Вы интересуетесь психолгией
                           </div>
                           <div className={classes.infoText}>
                              Вы узнаете, как не попасть в ловушки популярных синдромов. Научитесь выявлять их у себя и близких. И главное — получите практические методы борьбы с ними.
                           </div>
                        </div>
                     </Col>
                     <Col lg={4}>
                        <div className={classes.aboutHolder}>
                           <img src={hugs} alt='star' />

                           <div className={classes.infoNumber}>
                              Вы интересуетесь психолгией
                           </div>
                           <div className={classes.infoText}>
                              Вы узнаете, как не попасть в ловушки популярных синдромов. Научитесь выявлять их у себя и близких. И главное — получите практические методы борьбы с ними.
                           </div>
                        </div>
                     </Col>
                  </Row>


                  <Row >
                     <Col>
                        <div className={classes.smallContainer}>
                           <Row >
                              <Col md={1}>
                              </Col>
                              <Col md={7}>

                                 <div className={classes.smallWrapper}>
                                    <div className={classes.smallTextTitle}>
                                       Лекции у нас или у вас!
                                    </div>
                                 </div>

                                 <div className={classes.smallText}>
                                    Вы выбираете, где провести мероприятие, а наша команда берет все организационные вопросы на себя
                                 </div>
                              </Col>
                              <Col md={1}>
                              </Col>
                              <Col md={1}>
                                 <div>
                                    <img src={smallItem} alt='star' />
                                 </div>
                              </Col>
                              <Col md={1}>
                              </Col>
                           </Row>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
         </div >

         <div className={classes.program}>
            <Container fluid="xxl" >
               <Row >
                  <Col >
                     <div className={classes.titleSection}>
                        Программа курса
                     </div>
                     <div className={classes.subtitleSection} style={{ color: '#fff', textAlign: 'center', marginTop: -40, fontWeight: 300, marginBottom: 30, }}>
                        Основные психологические синдромы и техники работы с ними.
                     </div>
                  </Col>
               </Row>
               <Row >
                  <Col>
                     <div className={classes.prorgamBlock}>
                        <img src={block1} alt='star' />

                        <div className={classes.blockName}>
                           1<span className={classes.blockSmall}>-ый</span> Блок
                        </div>
                        <div>
                           <div className={classes.blockTitle}>
                              Арт-терапия как инструмент в работе с людьми:

                           </div>
                           <ul>
                              <li className={classes.blockList}>
                                 История арт-терапии
                              </li>
                              <li className={classes.blockList}>
                                 Терапевтические цели и методология
                              </li>
                              <li className={classes.blockList}>
                                 Виды арт-терапии
                              </li>
                              <li className={classes.blockList}>
                                 Виды арт-терапии
                              </li>
                           </ul>
                        </div>
                     </div>
                  </Col>
               </Row>
               <Row >
                  <Col>
                     <div className={classes.prorgamBlock}>
                        <img src={block1} alt='star' />

                        <div className={classes.blockName}>
                           2<span className={classes.blockSmall}>-ый</span> Блок
                        </div>
                        <div>
                           <div className={classes.blockTitle}>
                              Арт-терапия как инструмент в работе с людьми:

                           </div>
                           <ul>
                              <li className={classes.blockList}>
                                 История арт-терапии
                              </li>
                              <li className={classes.blockList}>
                                 Терапевтические цели и методология
                              </li>
                              <li className={classes.blockList}>
                                 Виды арт-терапии
                              </li>
                              <li className={classes.blockList}>
                                 Виды арт-терапии
                              </li>
                           </ul>
                        </div>
                     </div>
                  </Col>
               </Row>
               <Row >
                  <Col>
                     <div className={classes.prorgamBlock}>
                        <img src={block1} alt='star' />

                        <div className={classes.blockName}>
                           3<span className={classes.blockSmall}>-ый</span> Блок
                        </div>
                        <div>
                           <div className={classes.blockTitle}>
                              Арт-терапия как инструмент в работе с людьми:

                           </div>
                           <ul>
                              <li className={classes.blockList}>
                                 История арт-терапии
                              </li>
                              <li className={classes.blockList}>
                                 Терапевтические цели и методология
                              </li>
                              <li className={classes.blockList}>
                                 Виды арт-терапии
                              </li>
                              <li className={classes.blockList}>
                                 Виды арт-терапии
                              </li>
                           </ul>
                        </div>
                     </div>
                  </Col>
               </Row>
               <Row >
                  <Col>
                     <div className={classes.prorgamBlock}>
                        <img src={block1} alt='star' />

                        <div className={classes.blockName}>
                           4<span className={classes.blockSmall}>-ый</span> Блок
                        </div>
                        <div>
                           <div className={classes.blockTitle}>
                              Арт-терапия как инструмент в работе с людьми:

                           </div>
                           <ul>
                              <li className={classes.blockList}>
                                 История арт-терапии
                              </li>
                              <li className={classes.blockList}>
                                 Терапевтические цели и методология
                              </li>
                              <li className={classes.blockList}>
                                 Виды арт-терапии
                              </li>
                              <li className={classes.blockList}>
                                 Виды арт-терапии
                              </li>
                           </ul>
                        </div>
                     </div>
                  </Col>
               </Row>
               <Row >
                  <Col>
                     <div className={classes.prorgamBlock}>
                        <img src={block1} alt='star' />

                        <div className={classes.blockName}>
                           5<span className={classes.blockSmall}>-ый</span> Блок
                        </div>
                        <div>
                           <div className={classes.blockTitle}>
                              Арт-терапия как инструмент в работе с людьми:

                           </div>
                           <ul>
                              <li className={classes.blockList}>
                                 История арт-терапии
                              </li>
                              <li className={classes.blockList}>
                                 Терапевтические цели и методология
                              </li>
                              <li className={classes.blockList}>
                                 Виды арт-терапии
                              </li>
                              <li className={classes.blockList}>
                                 Виды арт-терапии
                              </li>
                           </ul>
                        </div>
                     </div>
                  </Col>
               </Row>

            </Container>
         </div>
         <Footer />
      </div >

   );
};

export default observer(RestoreBrokenCourse);
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
} from 'react-router-dom';

import { Layout } from 'antd';
import 'antd/dist/antd.css';

import { 
  Header,
  Home,
  AboutUs,
  Services,
  Contact
} from '../SquareSymmetry';

const { Content } = Layout;

const contentStyle = {
  backgroundColor: '#000000',
  height: '92vh',
  width: '100vw',
  position: 'relative',
  color: 'white'
};

function App() {
  return (
    <Layout>
      <Router>
        <Header />
        <Content style={ contentStyle }>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about-us'>
              <AboutUs />
            </Route>
            <Route path='/services'>
              <Services />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </Content>
      </Router> 
    </Layout>
  );
}

export default App;

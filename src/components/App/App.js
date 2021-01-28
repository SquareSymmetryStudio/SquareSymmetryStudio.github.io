import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
} from 'react-router-dom';

import { Layout } from 'antd';
import 'antd/dist/antd.css';

import SquareSymmetryHeader from '../SquareSymmetryHeader';
import SquareSymmetryHome from '../SquareSymmetryHome';

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
        <SquareSymmetryHeader />
        <Content style={ contentStyle }>
          <Switch>
            <Route exact path='/'>
              <SquareSymmetryHome />
            </Route>
            <Route path='/about-us'>
              <div>ABOUT US</div>
            </Route>
            <Route path='/services'>
              <div>SERVICES</div>
            </Route>
            <Route path='/contact'>
              <div>CONTACT</div>
            </Route>
          </Switch>
        </Content>
      </Router> 
    </Layout>
  );
}

export default App;

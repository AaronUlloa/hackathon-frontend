import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './routes/root'
import { Home } from './routes/home'
import { IniciarSesion } from './routes/iniciarSesion'
import { Eventos} from './routes/eventos'
import { Nosotros } from './routes/nosotros'
import { Registrar } from './routes/registrar'
import { ThemeProvider } from './components/themeProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'iniciar-sesion',
        element: <IniciarSesion />,
      },
      {
        path: 'eventos',
        element: <Eventos />
      },
      {
        path: 'nosotros',
        element: <Nosotros/>
      },
      {
        path: 'registrar',
        element: <Registrar />
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)

import React from 'react';
import DropDownBtn from './components/DropDownBtn';
import Button from './components/Button';
import Container from './components/Container';
import CardNoticia from './components/CardNoticia';
import Main from './Main';

const App = () => {

    let btn1 = {
        type: 'button',
        className: 'btn btn-primary',
        label: 'Primary'
    }

    let noticia1 = {
        imgUrl: '',
        title: '',
        description: '',
        button: {
            label: '',
            url: ''
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <DropDownBtn />
                        <Button type={btn1.type} className={btn1.className}>{btn1.label}</Button>
                        <Button type="button" className="btn btn-secondary">Secondary</Button>
                        <Button type="button" className="btn btn-success">Success</Button>
                        <Button type="button" className="btn btn-danger">Danger</Button>
                        <Button type="button" className="btn btn-warning">Warning</Button>
                        <Button type="button" className="btn btn-info">Info</Button>
                        <Button type="button" className="btn btn-light">Light</Button>
                        <Button type="button" className="btn btn-dark">Dark</Button>
                        <Button type="reset" className='btn btn-dark'>1</Button>
                    </div>
                    <div className="col-md-6">
                        <Button type="button" className="btn btn-warning btn-sm">Click Aqui</Button>
                        <CardNoticia
                            imgUrl={"https://picsum.photos/id/123/400/400"}
                            title={"Primera Imagen"}
                            description="Carga de imagen"
                            button={{ label: 'Click Here', url: '/#' }}
                        />
                    </div>
                    <div className="col-md-12">
                        <Main />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
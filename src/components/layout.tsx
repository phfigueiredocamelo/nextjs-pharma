import MainMenu from './main-menu';

export default function Layout({ children }: any) {
    return (<div>
        <MainMenu></MainMenu>        
        {children}
    </div>);
}

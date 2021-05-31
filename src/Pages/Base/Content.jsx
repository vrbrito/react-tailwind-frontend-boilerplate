

import Header from './Header'

export default function Content(props) {

    return (

        <div className="flex flex-col w-0 flex-1 overflow-hidden">

            <Header user={props.user} />

            <main className="flex-1 relative overflow-y-auto focus:outline-none">
                {props.children}
            </main>

        </div>
   
    )
    
}
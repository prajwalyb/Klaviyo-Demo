import React, { useRef , useState} from 'react';
import EmailEditor from 'react-email-editor'
import NavComp from '../components/MainNavbar.js';


const EmailTemplate = ({ match, history }) => {
    const editor = useRef(null);
    const [editorLoaded, seteditorLoaded] = useState(false);

    const onDesignLoad = () => seteditorLoaded(true);    

    return (
        <>
            <NavComp/>
            <EmailEditor
                ref={editor}
                minHeight="calc(100vh - 85px)"
                onDesignLoad={onDesignLoad}
            />
        </>
    );
};

export default EmailTemplate;

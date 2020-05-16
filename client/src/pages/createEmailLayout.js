import React, { useRef , useState} from 'react';
import EmailEditor from 'react-email-editor'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavComp from '../components/emailNavBarComponent.js';
import { saveEmail } from '../actions/emailActions.js';

const EmailTemplate = (props) => {

    const editor = useRef(null);

    const [editorLoaded, seteditorLoaded] = useState(false);

    const onDesignLoad = () => seteditorLoaded(true);    

    //const onLoad = () => editor.current.loadDesign()

    const saveDesign = () => {
        editor.current.saveDesign(design => {
            props.saveEmail(design);
        })
    }

    return (
        <>
            <NavComp saveDesign={saveDesign}/>
            <EmailEditor
                ref={editor}
                minHeight="calc(100vh - 85px)"
                onDesignLoad={onDesignLoad}
                //onLoad={onLoad}
            />
        </>
    );
};

const mapStateToProps = state => ({
  emailBody: state.email.email_body
})

export default connect( mapStateToProps , { saveEmail } )(withRouter(EmailTemplate));

import React, {Component} from 'react';
import axios from 'axios';
import './Contact.css';

const API_PATH = 'http://localhost:3000/nebojsamitrovic.github.io/api/contact/index.php';

class Contact extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fname: '',
			lname: '',
			email: '',
			message: '',
			mailSent: false,
			error: null
		}
	}

    handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
    };

    render() {
        return (
            <div id={'contact'} className={'contact'}>
                <div className={'heading contact-tab'}>
                    <h1 className={'heading-text contact-tab-heading right-tab-heading'}>Contact</h1>
                </div>
                <div className={'contact-content'}>
                    <h1 className={'contact-title'}>Have a question or want to work together?</h1>
                    <div className={'content'}>
                        <div className="container">
                            <form type={'POST'} action="/action_page.php">
                                <input type="text" id="fname" name="firstname" placeholder="Your name"
									   value={this.state.fname}
									   onChange={e => this.setState({ fname: e.target.value })}/>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name"
									   value={this.state.lname}
									   onChange={e => this.setState({ lname: e.target.value })}/>
                                <input type="email" id="email" name="email" placeholder="Your email"
									   value={this.state.email}
									   onChange={e => this.setState({ email: e.target.value })}/>
                                <textarea id="subject" name="subject" placeholder="Write something ..."
										  value={this.state.message}
										  onChange={e => this.setState({ message: e.target.value })}/>
								<button onClick={e => this.handleFormSubmit(e)}>SEND</button>
                            </form>
                            <div>
                                {this.state.mailSent &&
                                <div>Thank you for contacting me.</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;

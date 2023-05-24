import { Form, redirect } from 'react-router-dom';
import Button from '../components/Button';

function Contact() {
    return (
        <div className='contact'>
            <h2>Contact Us</h2>
            <Form method='post' action='/contact' replace>
                <input type='text' placeholder='Name' name='name' />
                <input type='text' placeholder='Email' name='email' />
                <textarea
                    name='message'
                    cols='30'
                    rows='10'
                    placeholder='Message'
                ></textarea>
                <Button color='primary' size='small'>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Contact;

export const contactAction = async ({ request }) => {
    const data = await request.formData();

    const submission = {
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
    };

    // data.set('nmae')

    console.log(submission);

    return redirect('/contact');
};

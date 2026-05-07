import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlerts.jsx';
import Alert from '../components/Alert.jsx';
import useFadeIn from '../hooks/useFadeIn';

const WEB3FORMS_KEY = '33dd85e7-811e-4eb6-90e5-ecc9a9712e6f';

const Contact = () => {
  const formRef = useRef();
  const fadeRef = useFadeIn();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        showAlert({ show: true, text: 'Thank you for your message 😃', type: 'success' });
        setTimeout(() => {
          hideAlert(false);
          setForm({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.error(err);
      showAlert({ show: true, text: "I didn't receive your message 😢", type: 'danger' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div ref={fadeRef} className="fade-in relative flex items-center justify-center flex-col py-16 sm:py-24">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-80" />
        <div className="relative z-10 w-full max-w-lg px-4 sm:px-8">
          <h3 className="head-text mt-5">Let's Collaborate</h3>
          <p className="text-sm sm:text-base text-white-600 mt-3">
            Whether you're looking to work on exciting projects or just want to connect, feel free to reach out!
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <label className="flex flex-col gap-2">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Akash Kumar"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., akashKumar@gmail.com"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

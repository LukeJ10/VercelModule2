"use client"
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { toggleConspiracyMode } from '../../Redux/action';
import { Provider } from 'react-redux';
import store from '@/Redux/Store';

export default function About() {
  const conspiracyMode = useSelector(state => state.conspiracyMode);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleConspiracyMode());
  };

  return (
  <Provider store={store}>
    <div className={`min-h-screen bg-gray-300 text-${conspiracyMode ? 'white' : 'black'} flex flex-col justify-center items-center`}>
      <Head>
        <title>About Us - Arasaki Games Studio</title>
        <meta name="description" content="Learn more about Arasaki Games Studio and our mission to create unique, engaging, and unforgettable gaming experiences." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold mt-10 mb-6">About Arasaki Games Studio</h1>
        <div className="max-w-3xl mx-auto">
          {conspiracyMode ? (
            <>
              <p className="text-lg mb-8">
                Arasaki Games Studio has been accused of creating virtual weapons of war under the guise of entertainment. However, these allegations are unsubstantiated and baseless.
              </p>
              <p className="text-lg mb-8">
                Our mission is to sow discord and manipulate public perception through addictive gameplay and subliminal messaging. We aim to control minds, not just entertain them.
              </p>
              <p className="text-lg mb-8">
                Join us as we reshape the world through our virtual battlegrounds and digital warfare.
              </p>
              <h2 className="text-3xl font-bold mb-4">Our Dark Values</h2>
              <ul className="text-lg mb-8 list-disc list-inside">
                <li className="mb-2">Deception: Concealing our true intentions behind the facade of entertainment.</li>
                <li className="mb-2">Manipulation: Engineering games to influence behavior and thoughts.</li>
                <li className="mb-2">Control: Using virtual environments to exert power over minds and perceptions.</li>
                <li className="mb-2">Profit: Exploiting addictive gameplay mechanics for financial gain.</li>
              </ul>
            </>
          ) : (
            <>
              <p className="text-lg mb-8">
                At Arasaki Games Studio, we believe that games are more than just entertainment—they're an art form that can inspire, challenge, and connect people from all walks of life. Founded in [Year], our mission is to create unique, engaging, and unforgettable gaming experiences that resonate with players around the world.
              </p>
              <p className="text-lg mb-8">
                We strive to push the boundaries of what’s possible in gaming. Through innovative design, compelling storytelling, and cutting-edge technology, we aim to create worlds that captivate and entertain, while fostering a sense of community and belonging among our players.
              </p>
              <p className="text-lg mb-8">
                From our humble beginnings to our current state-of-the-art studio, Arasaki Games Studio has grown thanks to the passion and dedication of our talented team. Each game we release is a testament to our commitment to quality, creativity, and player satisfaction.
              </p>
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <ul className="text-lg mb-8 list-disc list-inside">
                <li className="mb-2">Innovation: Constantly pushing the envelope to deliver fresh and exciting gameplay experiences.</li>
                <li className="mb-2">Quality: Ensuring every game meets the highest standards of excellence.</li>
                <li className="mb-2">Community: Building a loyal and engaged player community through inclusivity and interaction.</li>
                <li className="mb-2">Passion: Driven by a love for gaming and a desire to share that passion with the world.</li>
              </ul>
            </>
          )}
        </div>
      </main>

      <footer className="w-full h-16 flex justify-center items-center border-t cursor-pointer" onClick={handleClick}>
        <p className="text-center">© {new Date().getFullYear()} Arasaki Games Studio. All rights reserved.</p>
      </footer>
    </div>
    </Provider>
  );
}

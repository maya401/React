import React, { useState } from "react";
import Button from "../../buttons";

export default function LoginPage() {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckpassword] = useState('');
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(password === checkPassword){
      alert('Mots de passe validés !');
       alert("Connexion réussie !");
       window.location.href = "/dashboard";
    }else {
      alert("mot de pass incorrect")
    }

    const user = {
      email: email,
      password : password
    }

    localStorage.setItem("users", JSON.stringify(user))

   
  };
  return (
    <div className="bg-purple-600 flex items-center justify-center h-screen  w-full">
      <div className="bg-white p-8 rounded-xl">
        <h1 className="text-4xl font-bold text-purple-800">
          Page de connexion
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              
            />

             <label className="block text-sm font-medium text-gray-700">
              Confirmez votre mot de pass
            </label>
            <input
              type="password"
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="confirmez votre mot de passe"
              value={checkPassword}
              onChange={(e) => setCheckpassword(e.target.value) }
              required
             
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800"
          >
            Se connecter
          </button>
          
        </form>

          <div className="flex mt-5 gap-6">
          <p>Pas de compte ?  </p>
        <Button className="border-b-2 text-purple-600" text=" S'inscrire" link="/inscription"/>
        </div>
    
      </div>
    </div>
  );
}

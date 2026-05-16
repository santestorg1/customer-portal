import { useState, useEffect } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // XSS vulnerability: using dangerouslySetInnerHTML with user data
    fetch("/api/user/profile")
      .then(r => r.json())
      .then(setUser);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold">Welcome back</h1>
      {user && (
        <div dangerouslySetInnerHTML={{ __html: user.bio }} />
      )}
    </div>
  );
}

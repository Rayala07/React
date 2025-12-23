import Card from "./Components/card";

const App = () => {
  const profiles = [
    {
      id: 1,
      name: "Sophie Bennett",
      role: "Product Designer focused on intuitive user experiences.",
      profileImage:
        "https://i.pinimg.com/736x/d8/e2/3a/d8e23afb2fa5f2fff3a01f5bb80a3a96.jpg",
      followersCount: 312,
      postsCount: 48,
      isFollowed: false,
    },
    {
      id: 2,
      name: "Liam Carter",
      role: "UX Researcher passionate about human-centered design.",
      profileImage:
        "https://i.pinimg.com/1200x/1e/45/30/1e45300c8ef5946bb3a7793dd7ab0658.jpg",
      followersCount: 540,
      postsCount: 76,
      isFollowed: true,
    },
    {
      id: 3,
      name: "Ava Thompson",
      role: "Visual Designer crafting clean and modern interfaces.",
      profileImage:
        "https://i.pinimg.com/736x/14/da/38/14da386a68dc4a1c8112f6075610f483.jpg",
      followersCount: 198,
      postsCount: 22,
      isFollowed: false,
    },
    {
      id: 4,
      name: "Noah Williams",
      role: "Frontend Engineer blending design with performance.",
      profileImage:
        "https://i.pinimg.com/736x/38/ff/d7/38ffd76f9bd7fbc6ac7e2961a7415673.jpg",
      followersCount: 860,
      postsCount: 134,
      isFollowed: true,
    },
    {
      id: 5,
      name: "Emily Chen",
      role: "Product Illustrator and design systems enthusiast.",
      profileImage:
        "https://i.pinimg.com/736x/3d/fb/c7/3dfbc7b3a3c2094cbf603ca26d650dfc.jpg",
      followersCount: 276,
      postsCount: 41,
      isFollowed: false,
    },
    {
      id: 6,
      name: "Daniel Rodriguez",
      role: "Mobile App Designer focused on usability and motion.",
      profileImage:
        "https://i.pinimg.com/1200x/f2/68/18/f268181c343b785ffadc528ef7b5ce7c.jpg",
      followersCount: 640,
      postsCount: 89,
      isFollowed: true,
    },
    {
      id: 7,
      name: "Olivia Martin",
      role: "UX Writer crafting clear and accessible experiences.",
      profileImage:
        "https://i.pinimg.com/1200x/4b/f1/aa/4bf1aa024e43c3c2c064a41a030c83e3.jpg",
      followersCount: 154,
      postsCount: 18,
      isFollowed: false,
    },
    {
      id: 8,
      name: "James Anderson",
      role: "Design Lead building scalable product experiences.",
      profileImage:
        "https://i.pinimg.com/736x/a7/0a/30/a70a30b4f999dfae03e412539188479e.jpg",
      followersCount: 1024,
      postsCount: 210,
      isFollowed: true,
    },
  ];

  return (
    <div
      id="cards-container"
      className=" bg-[#191919] font-[Montserrat] p-4
      grid grid-cols-4 gap-8"
    >
      {profiles.map((profile) => {
        return (
          <Card
            userName={profile.name}
            userRole={profile.role}
            fCount={profile.followersCount}
            interaction={profile.postsCount}
            followState={profile.isFollowed}
            display={profile.profileImage}
          />
        );
      })}
    </div>
  );
};

export default App;

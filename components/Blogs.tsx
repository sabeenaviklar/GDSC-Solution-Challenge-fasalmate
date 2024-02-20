// pages/Plants.tsx

import React from 'react';

const plantsData = [
  {
    id: 1,
    title: 'Embracing Sustainable Agriculture: Minimizing Pesticide and Chemical Usage   ',
    content: 'n recent years, there has been a growing awareness of the environmental and health impacts associated with the excessive use of pesticides and chemicals in agriculture. Farmers, scientists, and consumers alike are recognizing the need for a shift towards more sustainable and eco-friendly farming practices. In this blog post, we explore the importance of minimizing pesticide and chemical usage in agriculture and the benefits it brings to our environment, health, and the overall well-being of our planet.Conventional agriculture has long relied on the use of pesticides and synthetic chemicals to boost crop yields and protect against pests and diseases. While these methods have undoubtedly contributed to increased food production, they come at a cost. The overreliance on chemical inputs has led to several adverse effects.Pesticides can contaminate soil, water, and air, posing a threat to ecosystems and non-target species. Runoff from fields can carry these chemicals into nearby water bodies, harming aquatic life and disrupting delicate ecosystems.    ',
    image: '/pesticide.png',
  },
  {
    id: 2,
    title: 'खेतों में की जानेवाली खाद और कीटनाशकों का उपयोग: एक जागरूकता   ',
    content: '1. पोषण की सुरक्षा:खाद, विभिन्न पोषक तत्वों की सुरक्षा करने के लिए महत्वपूर्ण है। फसलों को आवश्यक पोषण प्रदान करने के लिए खादों का सही समर्पण करना महत्वपूर्ण है। 2. उत्पादकता में सुधार:यह उत्पादकता को बढ़ाता है और फसलों की मात्रा और गुणवत्ता में सुधार करता है। अच्छी खाद फसलों को बीमारियों और कीटाणुओं से बचाने में सहायक होती है। 3. जल, वायु, और मिट्टी की सुरक्षा:सही मात्रा में खाद प्रदान करने से जल, वायु, और मिट्टी को भी सुरक्षा मिलती है, जिससे पर्यावरण को नुकसान नहीं होता है। पेष्टिसाइड्स फसलों को कीटाणुओं और कीटों से बचाने में मदद करते हैं। इन्हें सही समय पर सही मात्रा में और सही तरीके से प्रयोग करना महत्वपूर्ण है। किसानों का काम बहुतायत्र मुख्य रूप से आम आदमी के दैहिक आशीर्वाद को सुनिश्चित करना है। यह सुनिश्चित करना आवश्यक है कि हमें किसी भी मौसम में पर्याप्त खाद और कीटनाशकों के साथ-साथ विभिन्न फसलों की रक्षा भी करनी चाहिए। इस ब्लॉग पोस्ट में, हम खेती में इस्तेमाल होने वाले खाद और कीटनाशकों की चर्चा करेंगे, उनके प्रयोग के फायदे और उनसे उत्पन्न संभावित प्रभावों पर ध्यान देंगे।    ',
    image: '/pesticide.png',
  },
  // Add more plant entries as needed
];

const titleStyle = {
    textAlign: 'center',
    color: 'black', // Change the color to your preference
    fontSize: '70px',
    marginBottom: '20px',
  };

const PlantCard: React.FC<{ plant: typeof plantsData[0] }> = ({ plant }) => (
  <div
    style={{
      border: '1px solid #ddd',
      padding: '16px',
      margin: '16px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      transition: 'transform 0.3s ease-in-out',
    }}
  >
    <img
      src={plant.image}
      alt={plant.title}
      style={{ maxWidth: '100%', borderRadius: '4px' }}
    />
    <h2 style={{ marginTop: '12px' }}>{plant.title}</h2>
    <p>{plant.content}</p>
  </div>
);

const PlantList: React.FC<{ plants: typeof plantsData }> = ({ plants }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
  >
    {plants.map((plant) => (
      <PlantCard key={plant.id} plant={plant} />
    ))}
  </div>
);

const Blogs: React.FC = () => (
  <div>
   <h1 className='bold-52' style={titleStyle}>Blogs</h1>
    <PlantList plants={plantsData} />
  </div>
);

export default Blogs;

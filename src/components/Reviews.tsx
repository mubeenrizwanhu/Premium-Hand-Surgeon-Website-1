import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Michael Thompson',
      condition: 'Carpal Tunnel Surgery',
      date: 'January 2024',
      text: "After struggling with numbness and pain for two years, I finally decided to see Dr. Mitchell. She was thorough, explained everything clearly, and the surgery was far easier than I expected. Within three weeks, I was back to work without any discomfort. I wish I hadn't waited so long.",
      rating: 5,
    },
    {
      name: 'Jennifer Rodriguez',
      condition: 'Trigger Finger Release',
      date: 'November 2023',
      text: 'As a dental hygienist, my hands are my livelihood. Dr. Mitchell understood the urgency and scheduled me quickly. The procedure was straightforward, and her follow-up care was exceptional. My finger works perfectly now, and I have full confidence in my hands again.',
      rating: 5,
    },
    {
      name: 'David Chen',
      condition: 'Tendon Repair',
      date: 'September 2023',
      text: "I injured my hand in a cycling accident and was told by another surgeon that full recovery was unlikely. Dr. Mitchell performed a complex tendon repair, and after her rehabilitation program, I regained 100% function. She's truly an expert in her field.",
      rating: 5,
    },
    {
      name: 'Patricia Williams',
      condition: 'Thumb Arthritis Treatment',
      date: 'June 2023',
      text: 'The arthritis in my thumb had become unbearable. Dr. Mitchell recommended joint replacement, which I was nervous about, but she walked me through everything. The surgery went perfectly, and now I can garden, cook, and do everything I love without constant pain.',
      rating: 5,
    },
    {
      name: 'Robert Anderson',
      condition: 'Wrist Fracture Repair',
      date: 'March 2024',
      text: 'I fractured my wrist in three places and needed immediate surgical intervention. Dr. Mitchell and her team were professional, reassuring, and skilled. The surgery was successful, and my wrist healed beautifully. I have full range of motion and no limitations.',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
            Patient Reviews
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Hear from patients who have experienced exceptional care and successful outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#F7F9FB] p-8 rounded-xl relative"
            >
              <Quote className="text-[#3E6FA8] opacity-20 absolute top-4 right-4" size={48} />
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-[#2E8C82] fill-current"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-[#111827] leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[#0B1F3A]">{review.name}</p>
                <p className="text-sm text-[#6B7280]">{review.condition}</p>
                <p className="text-sm text-[#6B7280]">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

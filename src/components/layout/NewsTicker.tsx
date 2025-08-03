
import React from 'react';
import { Bell } from 'lucide-react';

const newsItems = [
  "Annual Sports Day scheduled for November 15th, 2025",
  "New admissions for Class VI now open - Apply before December 15th, 2025",
  "Parent-Teacher meeting for all classes on May 20th, 2025",
  "Summer vacation from May 25th to June 30th, 2025",
  "Congratulations to our students for excellent board exam results!",
];

const NewsTicker = () => {
  return (
    <div className="news-ticker">
      <div className="container">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-school-maroon px-3 py-1 rounded-md flex items-center gap-1 mr-4 z-10">
            <Bell className="h-4 w-4" />
            <span className="font-medium text-sm">Announcements</span>
          </div>
          <div className="overflow-hidden">
            <div className="news-ticker-content">
              {newsItems.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="mx-8">{item}</span>
                  <span className="text-school-gold mx-2">•</span>
                </React.Fragment>
              ))}
              {/* Duplicate for seamless loop */}
              {newsItems.map((item, index) => (
                <React.Fragment key={`dup-${index}`}>
                  <span className="mx-8">{item}</span>
                  <span className="text-school-gold mx-2">•</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;

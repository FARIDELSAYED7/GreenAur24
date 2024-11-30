import React from 'react';
import { activities } from '../data/activities';
import ActivityCard from './ActivityCard';
import PageTitle from './PageTitle';

const Activities = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <PageTitle title="Our Activities" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard
              key={activity.title}
              activity={activity}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
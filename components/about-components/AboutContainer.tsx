'use client';
import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';

const AboutHero = dynamic(() => import('./AboutHero'), { ssr: false });
const CompanyStory = dynamic(() => import('./CompanyStory'), { ssr: false });
const MissionVision = dynamic(() => import('./MissionVision'), { ssr: false });
const WhyChooseUs = dynamic(() => import('./WhyChooseUs'), { ssr: false });
const Sustainability = dynamic(() => import('./Sustainability'), {
	ssr: false,
});
const OurTeam = dynamic(() => import('./OurTeam'), { ssr: false });
const Reviews = dynamic(() => import('./Reviews'), { ssr: false });
const CTA = dynamic(() => import('./CTA'), { ssr: false });

const AboutContainer: React.FC = () => {
	return (
		<Fragment>
			<AboutHero />
			<CompanyStory />
			<MissionVision />
			<WhyChooseUs />
			<Sustainability />
			<OurTeam />
			<Reviews />
			<CTA />
		</Fragment>
	);
};

export default AboutContainer;

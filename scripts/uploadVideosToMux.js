import Mux from '@mux/mux-node';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const { Video } = new Mux(process.env.MUX_TOKEN_ID, process.env.MUX_TOKEN_SECRET);

const videoUrls = [
  'https://github.com/mpasko90/extenida-next/raw/master/public/videos/Landscape%20Putney%20Kitchen.mp4',
  'https://github.com/mpasko90/extenida-next/raw/master/public/videos/Vertical%20Greenstead%20Gardens%20LOGO.mp4'
];

const uploadVideoFromUrl = async (url) => {
  try {
    const asset = await Video.Assets.create({
      input: url,
      playback_policy: ['public'],
      encoding_tier: 'baseline'
    });
    console.log(`Successfully started processing ${url}`);
    console.log(`> Asset ID: ${asset.id}`);
    console.log(`> Playback ID: ${asset.playback_ids[0].id}`);
  } catch (error) {
    console.error(`Failed to process ${url}. Error: ${error.message}`);
  }
};

const run = async () => {
  for (const url of videoUrls) {
    await uploadVideoFromUrl(url);
  }
};

run();

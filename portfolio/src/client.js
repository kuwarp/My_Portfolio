import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'stemjmid',
  dataset: 'production',
  apiVersion: '2022-05-13',
  useCdn: true,
  token: 'skJx2UuHfo2K0enaUttFf6nb0BnGGrrknoqNBQUztQAb9vYap4qYhSADodtHBvk4I0TbXwJLKi0qb7eON4OcMo8177yTx5DSQZr8sWKuGGLeyzCzk3MLprcaGD2DgN8k1Gojjtdol7mODrJiy6N40Othkb0YmUb25r3MWCv25qdqLQvh3LZh'});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

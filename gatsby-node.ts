import {GatsbyNode} from 'gatsby';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = async ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new ForkTsCheckerWebpackPlugin()
    ]
  });
};

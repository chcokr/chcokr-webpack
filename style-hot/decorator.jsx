import compose from './higher-order';

export default function stylesheetHotLoad(baobabTree) {

  return function (target) {

    return compose(target, baobabTree);

  };

}

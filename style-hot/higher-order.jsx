import compose from './decorator';

export default function stylesheetHotLoad(baobabTree) {

  return function (target) {

    return compose(target, baobabTree);

  };

}

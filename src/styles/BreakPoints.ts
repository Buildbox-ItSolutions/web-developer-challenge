const size = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px'
};

const device = {
  mobile: `(width <= ${size.mobile})`,
  tablet: `(width <= ${size.tablet})`,
  desktop: `(width >= ${size.desktop})`
};

export default device;
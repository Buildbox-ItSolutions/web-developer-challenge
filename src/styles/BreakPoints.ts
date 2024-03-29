const size = {
  mobile: '320px',
  tablet: '800px',
  desktop: '1024px'
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`
};

export default device;
import React, { useReducer } from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';

export const PropertyDefaultWrapper = ({ property1, onPress }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || 'default',
  });

  if (Platform.OS === 'web') {
    // Dla wersji web używamy HTML/CSS, aby dokładnie odzwierciedlić oryginalny wygląd
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.buttonContainer}
      >
        <div 
          className={`property-default-wrapper property-1-0-${state.property1}`}
          style={{
            all: 'unset',
            alignItems: 'center',
            border: '1px solid',
            borderColor: '#648df6',
            borderRadius: '11px',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)',
            boxSizing: 'border-box',
            display: 'flex',
            height: '110px',
            justifyContent: 'center',
            position: 'relative',
            transition: 'all 0.2s ease',
            width: '719px',
            backgroundColor: state.property1 === 'default' ? '#3a6ef2' : 
                           state.property1 === 'variant-2' ? '#5783f3' : 
                           state.property1 === 'variant-3' ? '#2c54bb' : '#3a6ef2'
          }}
          onMouseEnter={() => dispatch('mouse_enter')}
          onMouseLeave={() => dispatch('mouse_leave')}
        >
          <div style={{
            color: '#ffffff',
            fontFamily: 'Poppins, Helvetica',
            fontSize: '48px',
            fontWeight: '600',
            letterSpacing: '0',
            lineHeight: '38px',
            position: 'relative',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            width: 'fit-content',
          }}>Start</div>
        </div>
      </TouchableOpacity>
    );
  }
  
  // Dla wersji mobilnej używamy natywnych komponentów
  return (
    <TouchableOpacity
      style={[styles.button, getVariantStyle(state.property1)]}
      onPress={onPress}
      onPressIn={() => dispatch('mouse_enter')}
      onPressOut={() => dispatch('mouse_leave')}
    >
      <Text style={styles.text}>Start</Text>
    </TouchableOpacity>
  );
};

function reducer(state, action) {
  switch (action) {
    case 'mouse_enter':
      return {
        ...state,
        property1: 'variant-2',
      };

    case 'mouse_leave':
      return {
        ...state,
        property1: 'default',
      };
  }

  return state;
}

const getVariantStyle = (variant) => {
  switch (variant) {
    case 'default':
      return styles.default;
    case 'variant-2':
      return styles.variant2;
    case 'variant-3':
      return styles.variant3;
    default:
      return styles.default;
  }
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#648df6',
    borderRadius: 11,
    display: 'flex',
    height: 110,
    justifyContent: 'center',
    width: 719, // Przywrócona oryginalna szerokość
    maxWidth: '90%', // Responsywność dla mniejszych ekranów
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15, // Dokładna wartość z oryginalnego CSS
    shadowRadius: 4,
    elevation: 5, // Dla Androida
  },
  text: {
    color: '#ffffff',
    fontFamily: Platform.OS === 'web' ? 'Poppins, Helvetica' : 'System',
    fontSize: 48,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 38,
  },
  default: {
    backgroundColor: '#3a6ef2',
  },
  variant2: {
    backgroundColor: '#5783f3',
  },
  variant3: {
    backgroundColor: '#2c54bb',
  },
});

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(['variant-2', 'variant-3', 'default']),
  onPress: PropTypes.func,
};

export default PropertyDefaultWrapper;
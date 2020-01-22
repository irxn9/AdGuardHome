import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Trans, withNamespaces } from 'react-i18next';
import { Field, reduxForm } from 'redux-form';
import flow from 'lodash/flow';
import Card from '../ui/Card';

import { renderInputField, required } from '../../helpers/form';

class Check extends Component {
    render() {
        const {
            t,
            handleSubmit,
            pristine,
            invalid,
            processing,
        } = this.props;

        return (
            <Card
                title={t('check_title')}
                subtitle={t('check_desc')}
            >
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className="form__group form__group--settings">
                                <Field
                                    id="name"
                                    name="name"
                                    component={renderInputField}
                                    type="url"
                                    className="form-control"
                                    placeholder={t('form_enter_host')}
                                    validate={[required]}
                                />
                            </div>
                            <div className="card-actions">
                                <button
                                    className="btn btn-success btn-standard btn-large"
                                    type="submit"
                                    onClick={this.handleSubmit}
                                    disabled={pristine || invalid || processing}
                                >
                                    <Trans>check</Trans>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </Card>
        );
    }
}

Check.propTypes = {
    t: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    processing: PropTypes.bool.isRequired,
};

export default flow([
    withNamespaces(),
    reduxForm({ form: 'domainCheckForm' }),
])(Check);

<template>
    <ContentWrapper>
        <div class="content-heading">New Article</div>
        <div class="alert alert-info">
            <em class="fa fa-exclamation-circle fa-lg fa-fw"></em>
            <span>There is an autosaved version of this article that is more recent than the version below.
                <a class="text-white" href="#">Restore</a>
            </span>
        </div>
        <div class="row">
            <!-- Article Content-->
            <div class="col-xl-9">
                <div class="card card-default">
                    <div class="card-body">
                        <form action="#">
                            <input class="mb-3 form-control form-control-lg" type="text" name="article-title" placeholder="Article title..." />

                            <quill-editor v-model="quillEditorContent" :options="quillEditorOptions" />

                            <br/>

                            <p>Notes</p>
                            <textarea class="mb-3 form-control" cols="6"></textarea>
                            <div class="clearfix">
                                <div class="float-left">
                                    <button class="btn btn-secondary" type="button">
                                        <em class="fa fa-edit fa-fw"></em>Draft</button>
                                    <button class="btn btn-primary" type="button">
                                        <em class="fa fa-check fa-fw"></em>Save</button>
                                </div>
                                <div class="float-right">
                                    <button class="btn btn-danger" type="button">
                                        <em class="fas fa-trash-alt fa-fw"></em>Remove</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <p class="lead">List of Comments</p>
                <div class="card">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <strong>Comment ID</strong>
                                    </th>
                                    <th>
                                        <strong>Date</strong>
                                    </th>
                                    <th>
                                        <strong>Username</strong>
                                    </th>
                                    <th>
                                        <strong>Comment excerpt</strong>
                                    </th>
                                    <th class="text-center">
                                        <strong>Current status</strong>
                                    </th>
                                    <th class="text-right" style="width:130px">
                                        <strong>Actions</strong>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>123</td>
                                    <td>10/05/2015</td>
                                    <td>
                                        <a href="">Jack Jordan</a>
                                    </td>
                                    <td>Sed quis eros libero, a euismod nisl....</td>
                                    <td class="text-center">
                                        <span class="badge badge-success">Approved</span>
                                    </td>
                                    <td class="text-right">
                                        <button class="btn btn-sm btn-secondary" type="button">
                                            <em class="fas fa-pencil-alt"></em>
                                        </button>
                                        <button class="btn btn-sm btn-danger" type="button">
                                            <em class="fas fa-trash-alt"></em>
                                        </button>
                                        <button class="btn btn-sm btn-success" type="button">
                                            <em class="fa fa-check"></em>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>456</td>
                                    <td>10/07/2015</td>
                                    <td>
                                        <a href="">Hailey Mckinney</a>
                                    </td>
                                    <td>Nulla facilisi.</td>
                                    <td class="text-center">
                                        <span class="badge badge-success">Approved</span>
                                    </td>
                                    <td class="text-right">
                                        <button class="btn btn-sm btn-secondary" type="button">
                                            <em class="fas fa-pencil-alt"></em>
                                        </button>
                                        <button class="btn btn-sm btn-danger" type="button">
                                            <em class="fas fa-trash-alt"></em>
                                        </button>
                                        <button class="btn btn-sm btn-success" type="button">
                                            <em class="fa fa-check"></em>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>789</td>
                                    <td>11/05/2015</td>
                                    <td>
                                        <a href="">Peyton Reyes</a>
                                    </td>
                                    <td>Quisque enim nisi, semper non pulvinar et, aliquam id lorem...</td>
                                    <td class="text-center">
                                        <span class="badge badge-warning">Pending</span>
                                    </td>
                                    <td class="text-right">
                                        <button class="btn btn-sm btn-secondary" type="button">
                                            <em class="fas fa-pencil-alt"></em>
                                        </button>
                                        <button class="btn btn-sm btn-danger" type="button">
                                            <em class="fas fa-trash-alt"></em>
                                        </button>
                                        <button class="btn btn-sm btn-success" type="button">
                                            <em class="fa fa-check"></em>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>999</td>
                                    <td>10/06/2015</td>
                                    <td>
                                        <a href="">Darryl Harper</a>
                                    </td>
                                    <td>Nulla facilisi.</td>
                                    <td class="text-center">
                                        <span class="badge badge-danger">Rejected</span>
                                    </td>
                                    <td class="text-right">
                                        <button class="btn btn-sm btn-secondary" type="button">
                                            <em class="fas fa-pencil-alt"></em>
                                        </button>
                                        <button class="btn btn-sm btn-danger" type="button" disabled="">
                                            <em class="fas fa-trash-alt"></em>
                                        </button>
                                        <button class="btn btn-sm btn-success" type="button">
                                            <em class="fa fa-check"></em>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- Article sidebar-->
            <div class="col-xl-3">
                <div class="card card-default">
                    <div class="card-body">
                        <p class="lead">Article Data</p>
                        <p class="my-2">Categories</p>
                        <multiselect
                          v-model="categoriesValue"
                          :options="categories"
                          :multiple="true"
                          :close-on-select="false"
                          :clear-on-select="false"
                          :hide-selected="true"
                          :preserve-search="true"
                          placeholder="Type here"
                          tag-placeholder="Add as a new tag"
                          :taggable="true"/>
                        <p class="my-2">Tags</p>
                        <multiselect
                          v-model="tagsValue"
                          :options="tags"
                          :multiple="true"
                          :close-on-select="false"
                          :clear-on-select="false"
                          :hide-selected="true"
                          :preserve-search="true"
                          placeholder="Type here"
                          tag-placeholder="Add as a new tag"
                          :taggable="true"/>
                        <p class="my-2">Reviewers</p>
                        <multiselect
                          v-model="reviewersValue"
                          :options="reviewers"
                          :multiple="true"
                          :close-on-select="false"
                          :clear-on-select="false"
                          :hide-selected="true"
                          :preserve-search="true"
                          placeholder="Type here"
                          tag-placeholder="Add as a new tag"
                          :taggable="true"/>

                        <p class="lead mt-3">SEO Metadata</p>
                        <div class="form-group">
                            <p>Title</p>
                            <input class="form-control" type="text" placeholder="Brief description.." />
                        </div>
                        <div class="form-group">
                            <p>Description</p>
                            <textarea class="form-control" rows="5" placeholder="Max 255 characters..."></textarea>
                        </div>
                        <div class="form-group">
                            <p>Keywords</p>
                            <textarea class="form-control" rows="5" placeholder="Max 1000 characters..."></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ContentWrapper>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>
    import Multiselect from 'vue-multiselect'
    // Quill editor
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import { quillEditor } from 'vue-quill-editor'

    const Categories = [ 'coding', 'less', 'sass', 'angularjs', 'node', 'expressJS' ]
    const Tags = [ 'JAVASCRIPT', 'WEB', 'BOOTSTRAP', 'SERVER', 'HTML5', 'CSS' ];
    const Reviewers = [
        'adam@email.com',
        'amalie@email.com',
        'wladimir@email.com',
        'samantha@email.com',
        'estefan??a@email.com',
        'natasha@email.com',
        'nicole@email.com',
        'adrian@email.com'
    ];

    export default {
        components: {
            Multiselect,
            quillEditor
        },
        data() {
            return {
                // Multiselect
                categoriesValue: [],
                categories: Categories,
                tagsValue: [],
                tags: Tags,
                reviewersValue: [],
                reviewers: Reviewers,
                // Vue Quill Editor
                quillEditorContent: '',
                quillEditorOptions: {
                    modules: {
                        toolbar: [
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] }, { 'size': [] }],
                            ['bold', 'italic', 'underline', 'strike'],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'script': 'sub' }, { 'script': 'super' }],
                            ['blockquote', 'code-block'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                            [{ 'direction': 'rtl' }, { 'align': [] }],
                            ['link', 'image', 'video'],
                            ['clean']
                        ]
                    }
                }
            }
        }
    }
</script>

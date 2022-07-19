Шаблон админ-панели для агрегаторов, интернет-магазинов, блогов и т.п на базу Material UI.
Используется: TypeScript, React, SCSS, Atomic методология, Redux-toolkit, RTK query.

Начало работы: github clone https://github.com/OtlichnikSasha/CRMTypescriptPattern.git.
npm install
Создать файлы .env.development и .env.production с переменными: 
REACT_APP_BACKEND_API=http://localhost:8080/api/ - api backendа
REACT_APP_LOGO_NAME=CRM - название админ-панели (отображается в header)

Запросы пишутся в store/api.

Swagger документация к конкретно этому проекту:
openapi: 3.0.1
info:
  title: Crm API
  description: Crm API documentation
  termsOfService: ''
  contact:
    name: ''
    url: ''
    email: ''
  license:
    name: unlicensed
    url: ''
  version: 0.0.1
servers:
  - url: http://localhost:8080
    description: Generated server url
paths:
  /api/products/{id}:
    get:
      tags:
        - product-resource
      operationId: getProduct
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Product'
    put:
      tags:
        - product-resource
      operationId: updateProduct
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Product'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Product'
    delete:
      tags:
        - product-resource
      operationId: deleteProduct
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: OK
    patch:
      tags:
        - product-resource
      operationId: partialUpdateProduct
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Product'
          application/merge-patch+json:
            schema:
              $ref: '#/components/schemas/Product'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Product'
  /api/orders/{id}:
    get:
      tags:
        - order-resource
      operationId: getOrder
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Order'
    put:
      tags:
        - order-resource
      operationId: updateOrder
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Order'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Order'
    delete:
      tags:
        - order-resource
      operationId: deleteOrder
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: OK
    patch:
      tags:
        - order-resource
      operationId: partialUpdateOrder
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Order'
          application/merge-patch+json:
            schema:
              $ref: '#/components/schemas/Order'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Order'
  /api/images/{id}:
    get:
      tags:
        - image-resource
      operationId: getImage
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Image'
    put:
      tags:
        - image-resource
      operationId: updateImage
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Image'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Image'
    delete:
      tags:
        - image-resource
      operationId: deleteImage
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: OK
    patch:
      tags:
        - image-resource
      operationId: partialUpdateImage
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Image'
          application/merge-patch+json:
            schema:
              $ref: '#/components/schemas/Image'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Image'
  /api/categories/{id}:
    get:
      tags:
        - category-resource
      operationId: getCategory
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Category'
    put:
      tags:
        - category-resource
      operationId: updateCategory
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Category'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Category'
    delete:
      tags:
        - category-resource
      operationId: deleteCategory
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: OK
    patch:
      tags:
        - category-resource
      operationId: partialUpdateCategory
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Category'
          application/merge-patch+json:
            schema:
              $ref: '#/components/schemas/Category'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Category'
  /api/application-users/{id}:
    get:
      tags:
        - application-user-resource
      operationId: getApplicationUser
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/ApplicationUser'
    put:
      tags:
        - application-user-resource
      operationId: updateApplicationUser
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ApplicationUser'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/ApplicationUser'
    delete:
      tags:
        - application-user-resource
      operationId: deleteApplicationUser
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: OK
    patch:
      tags:
        - application-user-resource
      operationId: partialUpdateApplicationUser
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ApplicationUser'
          application/merge-patch+json:
            schema:
              $ref: '#/components/schemas/ApplicationUser'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/ApplicationUser'
  /api/admin/users:
    get:
      tags:
        - user-resource
      operationId: getAllUsers
      parameters:
        - name: page
          in: query
          description: Zero-based page index (0..N)
          required: false
          schema:
            minimum: 0
            type: integer
            default: 0
        - name: size
          in: query
          description: The size of the page to be returned
          required: false
          schema:
            minimum: 1
            type: integer
            default: 20
        - name: sort
          in: query
          description: 'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.'
          required: false
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/AdminUserDTO'
    put:
      tags:
        - user-resource
      operationId: updateUser
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/AdminUserDTO'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/AdminUserDTO'
    post:
      tags:
        - user-resource
      operationId: createUser
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/AdminUserDTO'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/User'
  /api/register:
    post:
      tags:
        - account-resource
      operationId: registerAccount
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ManagedUserVM'
        required: true
      responses:
        '201':
          description: Created
  /api/products:
    get:
      tags:
        - product-resource
      operationId: getAllProducts
      parameters:
        - name: page
          in: query
          description: Zero-based page index (0..N)
          required: false
          schema:
            minimum: 0
            type: integer
            default: 0
        - name: size
          in: query
          description: The size of the page to be returned
          required: false
          schema:
            minimum: 1
            type: integer
            default: 20
        - name: sort
          in: query
          description: 'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.'
          required: false
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Product'
    post:
      tags:
        - product-resource
      operationId: createProduct
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Product'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Product'
  /api/orders:
    get:
      tags:
        - order-resource
      operationId: getAllOrders
      parameters:
        - name: eagerload
          in: query
          required: false
          schema:
            type: boolean
            default: false
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Order'
    post:
      tags:
        - order-resource
      operationId: createOrder
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Order'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Order'
  /api/images:
    get:
      tags:
        - image-resource
      operationId: getAllImages
      parameters:
        - name: eagerload
          in: query
          required: false
          schema:
            type: boolean
            default: false
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Image'
    post:
      tags:
        - image-resource
      operationId: createImage
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Image'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Image'
  /api/categories:
    get:
      tags:
        - category-resource
      operationId: getAllCategories
      parameters:
        - name: eagerload
          in: query
          required: false
          schema:
            type: boolean
            default: false
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Category'
    post:
      tags:
        - category-resource
      operationId: createCategory
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Category'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/Category'
  /api/authenticate:
    get:
      tags:
        - account-resource
      operationId: isAuthenticated
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                type: string
    post:
      tags:
        - user-jwt-controller
      operationId: authorize
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/LoginVM'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/JWTToken'
  /api/application-users:
    get:
      tags:
        - application-user-resource
      operationId: getAllApplicationUsers
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/ApplicationUser'
    post:
      tags:
        - application-user-resource
      operationId: createApplicationUser
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ApplicationUser'
        required: true
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/ApplicationUser'
  /api/account:
    get:
      tags:
        - account-resource
      operationId: getAccount
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/AdminUserDTO'
    post:
      tags:
        - account-resource
      operationId: saveAccount
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/AdminUserDTO'
        required: true
      responses:
        '200':
          description: OK
  /api/account/reset-password/init:
    post:
      tags:
        - account-resource
      operationId: requestPasswordReset
      requestBody:
        content:
          application/json:
            schema:
              type: string
        required: true
      responses:
        '200':
          description: OK
  /api/account/reset-password/finish:
    post:
      tags:
        - account-resource
      operationId: finishPasswordReset
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/KeyAndPasswordVM'
        required: true
      responses:
        '200':
          description: OK
  /api/account/change-password:
    post:
      tags:
        - account-resource
      operationId: changePassword
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/PasswordChangeDTO'
        required: true
      responses:
        '200':
          description: OK
  /api/users:
    get:
      tags:
        - public-user-resource
      operationId: getAllPublicUsers
      parameters:
        - name: page
          in: query
          description: Zero-based page index (0..N)
          required: false
          schema:
            minimum: 0
            type: integer
            default: 0
        - name: size
          in: query
          description: The size of the page to be returned
          required: false
          schema:
            minimum: 1
            type: integer
            default: 20
        - name: sort
          in: query
          description: 'Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.'
          required: false
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/UserDTO'
  /api/authorities:
    get:
      tags:
        - public-user-resource
      operationId: getAuthorities
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                type: array
                items:
                  type: string
  /api/admin/users/{login}:
    get:
      tags:
        - user-resource
      operationId: getUser
      parameters:
        - name: login
          in: path
          required: true
          schema:
            pattern: ^(?>[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)|(?>[_.@A-Za-z0-9-]+)$
            type: string
      responses:
        '200':
          description: OK
          content:
            '*/*':
              schema:
                $ref: '#/components/schemas/AdminUserDTO'
    delete:
      tags:
        - user-resource
      operationId: deleteUser
      parameters:
        - name: login
          in: path
          required: true
          schema:
            pattern: ^(?>[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)|(?>[_.@A-Za-z0-9-]+)$
            type: string
      responses:
        '200':
          description: OK
  /api/activate:
    get:
      tags:
        - account-resource
      operationId: activateAccount
      parameters:
        - name: key
          in: query
          required: true
          schema:
            type: string
      responses:
        '200':
          description: OK
components:
  schemas:
    ApplicationUser:
      type: object
      properties:
        id:
          type: integer
          format: int64
    Category:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        description:
          type: string
        products:
          uniqueItems: true
          type: array
          items:
            $ref: '#/components/schemas/Product'
    Image:
      type: object
      properties:
        id:
          type: integer
          format: int64
        imageURL:
          type: string
        products:
          uniqueItems: true
          type: array
          items:
            $ref: '#/components/schemas/Product'
    Order:
      type: object
      properties:
        id:
          type: integer
          format: int64
        acceptTime:
          type: string
          format: date-time
        completeTime:
          type: string
          format: date-time
        status:
          type: string
          enum:
            - GOING
            - ACCEPTED
            - COMPLETED
        products:
          uniqueItems: true
          type: array
          items:
            $ref: '#/components/schemas/Product'
        applicationUser:
          $ref: '#/components/schemas/ApplicationUser'
    Product:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        description:
          type: string
        price:
          type: integer
          format: int32
        amount:
          type: integer
          format: int32
        availability:
          type: boolean
        views:
          type: integer
          format: int32
        discountPrice:
          type: integer
          format: int32
        categories:
          uniqueItems: true
          type: array
          items:
            $ref: '#/components/schemas/Category'
        images:
          uniqueItems: true
          type: array
          items:
            $ref: '#/components/schemas/Image'
        orders:
          uniqueItems: true
          type: array
          items:
            $ref: '#/components/schemas/Order'
    User:
      required:
        - activated
        - login
      type: object
      properties:
        id:
          type: integer
          format: int64
        login:
          maxLength: 50
          minLength: 1
          pattern: ^(?>[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)|(?>[_.@A-Za-z0-9-]+)$
          type: string
        firstName:
          maxLength: 50
          minLength: 0
          type: string
        lastName:
          maxLength: 50
          minLength: 0
          type: string
        email:
          maxLength: 254
          minLength: 5
          type: string
        activated:
          type: boolean
        langKey:
          maxLength: 10
          minLength: 2
          type: string
        imageUrl:
          maxLength: 256
          minLength: 0
          type: string
        resetDate:
          type: string
          format: date-time
    AdminUserDTO:
      required:
        - login
      type: object
      properties:
        id:
          type: integer
          format: int64
        login:
          maxLength: 50
          minLength: 1
          pattern: ^(?>[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)|(?>[_.@A-Za-z0-9-]+)$
          type: string
        firstName:
          maxLength: 50
          minLength: 0
          type: string
        lastName:
          maxLength: 50
          minLength: 0
          type: string
        email:
          maxLength: 254
          minLength: 5
          type: string
        imageUrl:
          maxLength: 256
          minLength: 0
          type: string
        activated:
          type: boolean
        langKey:
          maxLength: 10
          minLength: 2
          type: string
        createdBy:
          type: string
        createdDate:
          type: string
          format: date-time
        lastModifiedBy:
          type: string
        lastModifiedDate:
          type: string
          format: date-time
        authorities:
          uniqueItems: true
          type: array
          items:
            type: string
    ManagedUserVM:
      required:
        - login
      type: object
      properties:
        id:
          type: integer
          format: int64
        login:
          maxLength: 50
          minLength: 1
          pattern: ^(?>[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)|(?>[_.@A-Za-z0-9-]+)$
          type: string
        firstName:
          maxLength: 50
          minLength: 0
          type: string
        lastName:
          maxLength: 50
          minLength: 0
          type: string
        email:
          maxLength: 254
          minLength: 5
          type: string
        imageUrl:
          maxLength: 256
          minLength: 0
          type: string
        activated:
          type: boolean
        langKey:
          maxLength: 10
          minLength: 2
          type: string
        createdBy:
          type: string
        createdDate:
          type: string
          format: date-time
        lastModifiedBy:
          type: string
        lastModifiedDate:
          type: string
          format: date-time
        authorities:
          uniqueItems: true
          type: array
          items:
            type: string
        password:
          maxLength: 100
          minLength: 4
          type: string
    LoginVM:
      required:
        - password
        - username
      type: object
      properties:
        username:
          maxLength: 50
          minLength: 1
          type: string
        password:
          maxLength: 100
          minLength: 4
          type: string
        rememberMe:
          type: boolean
    JWTToken:
      type: object
      properties:
        id_token:
          type: string
    KeyAndPasswordVM:
      type: object
      properties:
        key:
          type: string
        newPassword:
          type: string
    PasswordChangeDTO:
      type: object
      properties:
        currentPassword:
          type: string
        newPassword:
          type: string
    UserDTO:
      type: object
      properties:
        id:
          type: integer
          format: int64
        login:
          type: string
